import React, { Component } from 'react';
import { Menu, Modal,Icon } from 'semantic-ui-react';

import RegisterForm from './Register/register';
import LoginForm from './Login/login';

class Popup extends Component {
  state = { form: 'register' };
  changeForm = () => {
    if (this.state.form === 'login') this.setState({ form: 'register' });
    else this.setState({ form: 'login' });
  };
  render = () => (
    <Modal
      style={popupStyle}
      className="Popup"
      size="tiny"
      trigger=
      {
        <Menu.Item>
          <Icon name="user circle" size="big" />
          Log In
        </Menu.Item>
      }
    >
      {
        this.state.form === 'login'
          ? <LoginForm register={this.changeForm} />
          : <RegisterForm login={this.changeForm} />
      }
    </Modal>
  );
}

export default Popup;

var popupStyle = { height: '400px' };