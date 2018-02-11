import React, {Fragment } from 'react';
import { Menu, Popup,Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../../store/actions';
import DifficultyMenu from './Difficulty/DifficultyMenu';
import TagMenu from './Tags/TagMenu';
import Options from './optionsMenu';
import ProfileMenu from './ProfileMenu';

const HeaderMenu = ({ name, difficulty }) => (
  <Fragment>
    <DifficultyMenu difficultySetting={difficulty} />
    {name ? (
      <TagMenu />
    ) : (
      <Popup
        trigger={
          <Menu.Item style={style.menu_item}>
            <Icon
              name="tags"
              color={'orange'}
              style={style.disabled_tag}
              size="big"
            />
          </Menu.Item>
        }
        content="Sign up to store poses in your favorites"
      />
    )}
    <Menu.Menu position="right">  
      {!name&&<ProfileMenu />}
      <Options isUser={name} />
      <Menu.Item item style={style.empty_space} />
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
  disabled_tag: {
    opacity: '0.2',
  },
  menu_item: {
    cursor: 'default',
  },
  empty_space: {
    width: '4.5vw'
  },
};