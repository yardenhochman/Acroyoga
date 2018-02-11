import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import Media from 'react-media';
import HeaderMenu from './menu/HeaderMenu';
import { Desktop, Phone_Portrait } from '../../device_rules';

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