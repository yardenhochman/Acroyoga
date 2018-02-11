import React from 'react';
import Popup from '../Popup/popup';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';
import {LOG_OUT} from '../../../store/actions';

const ProfileMenu = ({ userName, UserLogout }) => {
  const logOut = () => {
    localStorage.removeItem('token');
    UserLogout();
  };
  if (!userName) {
    return <Popup userName={userName} />;
  }
  return (
    <Menu.Item
      onClick={logOut}
    >
      <Icon
        name="sign out"
        size="big"
        color="red"
      />
      {userName}
    </Menu.Item>
  );
};

const mapStateToProps = ({ user: { name } }) => ({ userName: name });
const mapDispatchToProps = dispatch => ({
  UserLogout: () =>
    dispatch({
      type: LOG_OUT,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
