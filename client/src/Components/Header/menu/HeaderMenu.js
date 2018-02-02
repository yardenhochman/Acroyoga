import React, { Component, Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import DifficultyMenu from './Difficulty/DifficultyMenu';
import ProfileMenu from './ProfileMenu';
import TagMenu from './Tags/TagMenu';

class HeaderMenu extends Component {
  render = () => {
    const { name, difficulty } = this.props;
    return (
      <Fragment>
        <DifficultyMenu difficultySetting={difficulty} />
        {name && <TagMenu />}
        <Menu.Menu position="right">
          <ProfileMenu />
        </Menu.Menu>
      </Fragment>
    );
  };
}

const mapStateToProps = state => {
  const { view: { difficulty }, user: { name } } = state;
  return { difficulty, name };
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
