import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import Media from 'react-media';
import HeaderMenu from './menu/HeaderMenu';

const Header = () => (
  <Fragment>
    <Media
      query={`not ${Phone_Landscape}`}
    >
      <Menu
        borderless
        style={headerStyle}
        size={'huge'}
        fluid
      >
        <HeaderMenu />
      </Menu>
    </Media>
  </Fragment>
);

export default Header;


var Phone_Landscape = 'screen and (min-device-width: 320px) and (max-device-width: 800px) and (orientation: landscape)';
var headerStyle = {
  width: '100vw',
  height: '8vh',
  display: 'flex',
  flexDirection: 'row',
  margin: '0',
  justifyContent: 'center',
};