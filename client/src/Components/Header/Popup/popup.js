import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import RegisterForm from './Register/register';
import LoginForm from './Login/login';

class Popup extends Component {
  state = { form: 'register' };
  changeForm = () => {
    if (this.state.form === 'login')
      this.setState({ form: 'register' });
    else this.setState({ form: 'login' });
  };
  render = () => (
    <Modal
      style={popupStyle}
      className="Popup"
      size="tiny"
      trigger={
        <Button style={style.log_in}>
          LOGIN
        </Button>
      }
    >
      {this.state.form === 'login' ? (
        <LoginForm register={this.changeForm} />
      ) : (
        <RegisterForm login={this.changeForm} />
      )}
    </Modal>
  );
}

export default Popup;

var style = {
  popup: {
    height: '400px',
  },
  log_in: {
    height: '4vh',
    width: '10vw',
    margin: 'auto 2vw',
    backgroundColor: '#FF7257',
    color: 'white',
    fontFamily: 'Lato',
  },
};
var popupStyle = { height: '400px' };