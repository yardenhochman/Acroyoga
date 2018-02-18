import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import Media from 'react-media';
import HeaderMenu from './Menu';
import { Desktop, Phone_Portrait } from '../../DeviceRules';

const Header = () => (
  <Fragment>
    <Media query={Desktop}>
      <Menu style={headerStyle} size={'huge'} fluid>
        <HeaderMenu />
      </Menu>
    </Media>
    <Media query={Phone_Portrait}>
      <Menu borderless style={headerStyle} size={'huge'} fluid>
        <HeaderMenu />
      </Menu>
    </Media>
  </Fragment>
);

export default Header;

var headerStyle = {
  width: '100vw',
  height: '8vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};