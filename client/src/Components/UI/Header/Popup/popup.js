import React, { Component } from 'react';
import { Menu, Button, Header, Image, Modal, Form, Checkbox, Link } from 'semantic-ui-react';
import { Grid, Message, Segment } from 'semantic-ui-react';

import RegisterForm from './Register/register';
import LoginForm from './Login/login';

class Popup extends Component {
  state = { form: 'register' };
  changeForm = () => {
    if (this.state.form === 'login') this.setState({ form: 'register' });
    else this.setState({ form: 'login' });
  };
  renderForm = () => {
    const { form } = this.state;
    if (form === 'login') return <LoginForm register={this.changeForm} />;
    else return <RegisterForm login={this.changeForm} />;
  };
  render = () => (
    <Modal dimmer="blurring" className="Popup" size="tiny" trigger={<Menu.Item>Login</Menu.Item>}>
      {this.renderForm()}
    </Modal>
  );
}

export default Popup;
