import React, { Component } from 'react';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../../store/actions';

const MessageExampleError = () => (
  <Message
    error
    header="There was some errors with your submission"
    list={[
      'You must include both a upper and lower case letters in your password.',
      'You need to select your home country.',
    ]}
  />
);

class RegisterForm extends Component {
  state = {
    controls: {
      name: {
        value: '',
        validation: { required: true, minLength: 2 },
        valid: false,
      },
      email: {
        value: '',
        validation: { required: true, isEmail: true },
        valid: false,
      },
      password: {
        elementType: 'input',
        value: '',
        validation: { required: true, minLength: 6 },
        valid: false,
      },
    },
    badEmail: false,
    badPW: false,
    badName: false,
    isSignup: true,
  };
  formSubmit = async () => {
    const { email, password, name } = this.state.controls;
    if (!email.valid || !password.valid || !name.valid) return; //add error message
    const url = 'users/register';
    const data = {};
    data.email = email.value;
    data.password = password.value;
    data.name = name.value;
    try {
      const res = await axios({ method: 'POST', url, data });
      console.log(res.data);
      this.props.UserLogin(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };
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
  input = (e, type) => {
    const { value } = e.target;
    const { controls } = this.state;
    let updatedControls;
    switch (type) {
      case 'email':
        updatedControls = {
          ...controls,
          email: {
            ...controls.email,
            value,
            valid: this.checkValidity(value, controls.email.validation),
          },
        };
        break;
      case 'pw':
        updatedControls = {
          ...controls,
          password: {
            ...controls.password,
            value,
            valid: this.checkValidity(value, controls.password.validation),
          },
        };
        break;
      case 'name':
        updatedControls = {
          ...controls,
          name: {
            ...controls.name,
            value,
            valid: this.checkValidity(value, controls.name.validation),
          },
        };
        break;
      default:
        break;
    }

    this.setState({ controls: updatedControls });
  };
  displayError() {
    if (this.state.badPW) return <MessageExampleError />;
  }
  render = () => {
    console.log('register updated');
    const { login } = this.props;
    const { password, email, name } = this.state.controls;

    return (
      <div className="register-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.register-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.formSubmit}>
              <Segment stacked>
                <Form.Input
                  error={this.state.badName}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Name"
                  value={name.value}
                  onChange={e => this.input(e, 'name')}
                />
                <Form.Input
                  error={this.state.badEmail}
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                  type="email"
                  value={email.value}
                  onChange={e => this.input(e, 'email')}
                />
                <Form.Input
                  error={this.state.badPW}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={password.value}
                  onChange={e => this.input(e, 'pw')}
                />
                <Button type="formSubmit" color="teal" fluid size="large">
                  Register
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account?
              <Button onClick={login}>Login</Button>
            </Message>
            {this.displayError()}
          </Grid.Column>
        </Grid>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
/*
email:

                  value={email.value}
                  onChange={e => this.input(e, 'email')}

pw:

                  value={password.value}
                  onChange={e => this.input(e, 'pw')}

*/
