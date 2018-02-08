import React, { Component } from 'react';
import Popup from '../Popup/popup';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import * as actionTypes from '../../../store/actions';

class ProfileMenu extends Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.UserLogout();
  };
  render = () => {
    const { userName } = this.props;
    const signOutStyle = { cursor: 'pointer' };
    if (!userName) {
      return <Popup userName={userName} />;
    }
    return <Menu.Item>
        <i className="fa fa-2x fa-sign-out" style={signOutStyle} onClick={this.logOut} aria-hidden="true">{`${userName}`}</i>
      </Menu.Item>;
  };
}

const mapStateToProps = state => {
  const { user: { name } } = state;
  return { userName: name };
};
const mapDispatchToProps = dispatch => {
  const { LOG_OUT } = actionTypes;
  return {
    UserLogout: () =>
      dispatch({
        type: LOG_OUT,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
