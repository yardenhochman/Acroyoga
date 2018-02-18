import React, { Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import ProfileMenu from './ProfileMenu';
import { Orange } from '../../../DeviceRules';

const Options = ({ isUser }) => (
  <Fragment>
    <Dropdown
      item
      icon={
        <Icon
          name="bars"
          size="big"
          style={isUser ? style.icon_user_logged_in: style.icon}
        />
      }
    >
      <Dropdown.Menu>
        <Route
          render={({ history }) => (
            <Menu.Item
              link
              onClick={() => {
                history.push('/');
              }}
            >
              <Icon
                name="home"
                style={style.home_button_icon}
              />Home Page
            </Menu.Item>
          )}
        />
        <Route
          render={({ history }) => (
            <Menu.Item
              link
              onClick={() => {
                history.push('/about');
              }}
            >
              <Icon name="info circle" size="big" />
              About Us
            </Menu.Item>
          )}
        />
        {isUser && <ProfileMenu />}
      </Dropdown.Menu>
    </Dropdown>
  </Fragment>
);



export default Options;

var style = {
  icon: {
    margin: '0 0.5vw'
  },
  icon_user_logged_in: {
    color: `${Orange}`,
    margin: '0 0.5vw'
  },
  home_button: {
    color: 'black'
  }
};