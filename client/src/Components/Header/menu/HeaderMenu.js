import React, {Fragment } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../../store/actions';
import DifficultyMenu from './Difficulty/DifficultyMenu';
import TagMenu from './Tags/TagMenu';
import Options from './optionsMenu';

const HeaderMenu = ({ name, difficulty }) => (
  <Fragment>
    <DifficultyMenu
      difficultySetting={difficulty}
    />
    {name && <TagMenu />}
    <Menu.Menu
      position="right"
    >
      <Dropdown.Menu
        style={style.drop_down}
      >
        <Options
          isUser={name}
        />
      </Dropdown.Menu>
    </Menu.Menu>
  </Fragment>
);

const mapStateToProps = ({ view: { difficulty }, user: { name } }) => ({ difficulty, name });
const mapDispatchToProps = dispatch => ({
    UserLogout: () =>
      dispatch({
        type: LOG_OUT,
      }),
  });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);


var style = {
  drop_down: {
    display: 'flex',
  },
};