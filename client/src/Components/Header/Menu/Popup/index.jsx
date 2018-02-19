import React, { Component } from 'react';
import { Button, Modal, Menu, Icon } from 'semantic-ui-react';
import Media from 'react-media';
import RegisterForm from './Register';
import LoginForm from './Login';
import { Desktop, Phone_Portrait } from '../../../../DeviceRules';

class Popup extends Component {
  state = { form: 'register' };
  changeForm = () => {
    if (this.state.form === 'login')
      this.setState({ form: 'register' });
    else this.setState({ form: 'login' });
  };
  render = () => (
    <React.Fragment>
      <Media query={Desktop}>
        <Modal
          style={popupStyle}
          className="Popup"
          size="mini"
          trigger={
            <Button style={style.log_in}>LOGIN</Button>
          }
        >
          {this.state.form === 'login' ? (
            <LoginForm register={this.changeForm} />
          ) : (
            <RegisterForm login={this.changeForm} />
          )}
        </Modal>
      </Media>
      <Media query={Phone_Portrait}>
        <Modal
          style={popupStyle}
          className="Popup"
          size="tiny"
          trigger={
            <Menu.Item>
              <Icon
                style={style.log_in_icon}
                size="large"
                name="user circle outline"
              />
            </Menu.Item>
          }
        >
          {this.state.form === 'login' ? (
            <LoginForm register={this.changeForm} />
          ) : (
            <RegisterForm login={this.changeForm} />
          )}
        </Modal>
      </Media>
    </React.Fragment>
  );
}

export default Popup;
var style = {
  log_in: {
    height: '4vh',
    width: '10vh',
    margin: 'auto 2vw',
    backgroundColor: '#FF7257',
    color: 'white',
    fontFamily: 'Lato',
    display: `flex`,
    justifyContent: `center`,
  },
  log_in_phone: {
    backgroundColor: '#FF7257',
    color: 'white',

    width: '41vw',
    height: '10vh',
    padding: '0',
  },
  menu_style: {
    padding: `0`,
  },
  log_in_icon: {
    color: `#FF7257`,
    opacity: '1',
    fontSize: `2em`
  },
};
var popupStyle = { 
  height: '350px',
  padding: `20px`
};