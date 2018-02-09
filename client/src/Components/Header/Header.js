import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import Media from 'react-media';
import HeaderMenu from './menu/HeaderMenu';
const headerStyle = {
  width: '100vw',
  height: '8vh',
  display: 'flex',
  flexDirection: 'row',
  margin: '0',
  justifyContent: 'center',
};

const Header = () => {
  return <Fragment>
      <Media query={{ minWidth: 1000 }}>
        {yes => yes && <Menu borderless style={headerStyle} size={'huge'} fluid>
              <HeaderMenu />
            </Menu>}
      </Media>
      <Media query={{ maxWidth: 450 }}>
        {yes => yes && <Menu borderless style={headerStyle} size={'huge'} fluid>
              <HeaderMenu />
            </Menu>}
      </Media>
    </Fragment>;
};

export default Header;
