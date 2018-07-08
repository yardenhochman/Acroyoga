import React, { Component } from 'react';
import RegisterForm from './Register';
import LoginForm from './Login';
import LoadIf from '../../../UI/LoadIf';
import { StyledModal, LoginButton, LoginIcon, MenuItem } from './style';

export default class Popup extends Component {
  state = { form: 'register' };
  changeForm = () => {
    if (this.state.form === 'login')
      this.setState({ form: 'register' });
    else this.setState({ form: 'login' });
  };
  activeForm = () => {
    if (this.state.form === 'login')
      return <LoginForm register={this.changeForm} />
    else return <RegisterForm login={this.changeForm} />
  }
  render = () => (
    <React.Fragment>
      <LoadIf.Desktop>
        <Desktop form={this.activeForm} />
      </LoadIf.Desktop>
      <LoadIf.Portrait>
        <Portrait form={this.activeForm} />
      </LoadIf.Portrait>
    </React.Fragment>
  );
};

function Desktop({form: Form}){
  return (
    <StyledModal
    size="mini"
    trigger={
      <LoginButton>LOGIN</LoginButton>
    }
  >
    <Form />
  </StyledModal>
  )
}
function Portrait({form: Form}){
  return (
    <StyledModal
          size="tiny"
          trigger={
            <MenuItem>
              <LoginIcon />
            </MenuItem>
          }
        >
          <Form />
        </StyledModal>
  )
}