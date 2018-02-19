import React, {Fragment } from 'react';
import { Menu, Popup,Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Media from 'react-media';
import { LOG_OUT } from '../../../store/actions';
import DifficultyMenu from './Difficulty';
import TagMenu from './Tags';
import Options from './OptionsMenu';
import ProfileMenu from './ProfileMenu';
import {Desktop} from '../../../DeviceRules';

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
              style={style.disabled_tag}
              size="big"
            />
          </Menu.Item>
        }
        inverted
        content="Sign up to save poses to your favorites"
      />
    )}
    <Menu.Menu position="right">
      {!name && <ProfileMenu />}
      <Options isUser={name} />
      <Media query={Desktop}>
        <Menu.Item item='true' style={style.empty_space} />
      </Media>
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