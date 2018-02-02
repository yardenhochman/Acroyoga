import React, { Component } from 'react';
import { Menu, Modal } from 'semantic-ui-react';

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
  render = () => {
    let popupStyle = { height: '400px' };
    console.log('Popup updated');
    return (
      <Modal
        style={popupStyle}
        className="Popup"
        size="tiny"
        trigger={
          <Menu.Item>
            <i className="fa fa-user-circle fa-lg" aria-hidden="true" />
          </Menu.Item>
        }
      >
        {this.renderForm()}
      </Modal>
    );
  };
}

export default Popup;
