import React, { Component } from 'react';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {storeUser}  from '../../../../store/actions/actions';
import api from '../../../../API';
import styler from 'react-styling';

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
  render = () => (
    <div className="login-form">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.formSubmit} warning>
              <Segment style={style.login_parts} stacked>
                <Form.Input 
                  fluid icon="mail" 
                  iconPosition="left" 
                  type="email" 
                  placeholder="E-mail address" 
                  onChange={e => this.setState({[e.target.type]: e.target.value})} 
                  value={this.state.email} 
                />
                <Form.Input 
                  fluid 
                  icon="lock" 
                  iconPosition="left" 
                  placeholder="Password" 
                  type="password" 
                  onChange={e => this.setState({[e.target.type]: e.target.value})} 
                  value={this.state.password} 
                />
                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message style={style.register_box}>
              Don't have an account yet? 
              <Button onClick={this.props.register} style={style.register_button}>Register</Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
};

const mapStateToProps = ({ user: { name: userName } }) => ({ userName });
const mapDispatchToProps = dispatch => ({ UserLogin: user => dispatch(storeUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

var style = styler`
  register_button
    margin-left:10px
  register_box
    margin-top: 6vh

`;