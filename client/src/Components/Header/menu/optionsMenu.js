import React, { Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import ProfileMenu from './ProfileMenu';

const Options = ({ isUser }) => (
  <Fragment>
    <Dropdown
      item
      icon={
        <Icon
          name="bars"
          color={isUser ? 'green' : 'orange'}
          size="big"
          style={style.icon}
        />
      }
    >
      <Dropdown.Menu>
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
        {isUser && <ProfileMenu/>}
      </Dropdown.Menu>
    </Dropdown>
  </Fragment>
);



export default Options;

var style = {
  icon: {
    margin: '0 0.5vw'
  }
}