import React, { Component } from 'react';
import axios from 'axios';

import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };
  formSubmit = async () => {
    const { email, password } = this.state;
    const url = 'users/login';
    const data = {};
    data.username = email.value;
    data.password = password.value;
    try {
      const res = await axios({ method: 'POST', url, data });
      console.log(res.data);
      this.props.UserLogin(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  handInputChange = e => {
    const { value, type } = e.target;
    this.setState({ [type]: value });
  };
  render() {
    console.log('login updated')
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
                  icon="user"
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

export default LoginForm;
