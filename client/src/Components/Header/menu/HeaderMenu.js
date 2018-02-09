import React, { Component, Fragment } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import DifficultyMenu from './Difficulty/DifficultyMenu';
import TagMenu from './Tags/TagMenu';
import Options from './optionsMenu';

const dropDownStyle = {
  display: 'flex'
}

class HeaderMenu extends Component {
  render = () => {
    const { name, difficulty } = this.props;
    return <Fragment>
        <DifficultyMenu difficultySetting={difficulty} />
        {name && <TagMenu />}
        <Menu.Menu position="right">
          <Dropdown.Menu style={dropDownStyle}>
            {' '}
          <Options isUser={name}/>
          </Dropdown.Menu>
        </Menu.Menu>
      </Fragment>;
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
