import React, { Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import ProfileMenu from './ProfileMenu';
import { Route } from 'react-router-dom';

const Options = ({ isUser }) => (
  <Fragment>
    <Dropdown
      item
      icon={
        <Icon
          name="bars"
          color={isUser ? 'green' : 'black'}
          size="big"
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
        <ProfileMenu />
      </Dropdown.Menu>
    </Dropdown>
  </Fragment>
);



export default Options;
