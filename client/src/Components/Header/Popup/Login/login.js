import React, { Component } from 'react';
import { connect } from 'react-redux';
import {storeUser}  from '../../../../store/actions/actions';
import api from '../../../../api';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };
  formSubmit = async () => {
    try {
      const res = await api.user.login(this.state);
      localStorage.setItem('token', res.token);
      const newUser = await api.user.get();
      this.props.UserLogin(newUser);
    } catch (err) {
      console.log(err);
    }
  };
  handInputChange = e => {
    const { value, type } = e.target;
    this.setState({ [type]: value });
  };
  render() {
    console.log('login updated');
    const { register } = this.props;

    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.formSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  type="email"
                  placeholder="E-mail address"
                  onChange={this.handInputChange}
                  value={this.state.email}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handInputChange}
                  value={this.state.password}
                />

                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Button onClick={register}>Register</Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { user: { name: userName } } = state;
  return { userName };
};
const mapDispatchToProps = dispatch => {
  return { UserLogin: user => dispatch(storeUser(user)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
