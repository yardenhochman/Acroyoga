import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Input from '../Components/UI/Input/Input';
import Button from '../Components/UI/Button/Button';
//import * as actions from '../store/auth';
import * as actionTypes from '../store/actions';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail Address',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  };
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };
  switchAuthModeHandler = () =>
    this.setState(prevState => {
      return { isSignup: prevState.isSignup };
    });
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) return true;
    if (rules.required) isValid = value.trim() !== '' && isValid;
    if (rules.minLength) isValid = value.length >= rules.minLength && isValid;
    if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }
  formSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state.controls;
    const url = 'users/register';
    const user = {};
    user.email = email.value;
    user.password = password.value;
    try {
      const res = await axios({ method: 'POST', url, data: user });
      console.log(res.data);
      this.props.UserLogin(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  render = () => {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    return (
      <div>
        <form onSubmit={this.formSubmit}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
      </div>
    );
  };
}
const mapStateToProps = state => {
  const { user: { name: userName } } = state;
  return { userName };
};
const mapDispatchToProps = dispatch => {
  return {
    UserLogin: user =>
      dispatch({
        type: actionTypes.FILL_USER,
        user,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

/* 
if logged in, display logout button and username
otherwise, show login or register options

*/
