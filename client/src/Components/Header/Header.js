import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import Media from 'react-media';

import HeaderMenu from './menu/HeaderMenu';

const Header = () => {
  return (
    <Fragment>
      <Media query={{ minWidth: 1000 }}>
        {yes =>
          yes && (
            <Menu borderless className="header" color="yellow" size={'large'} fluid>
              <HeaderMenu />
            </Menu>
          )
        }
      </Media>
      <Media query={{ maxWidth: 450 }}>
        {yes =>
          yes && (
            <Menu borderless className="header" size={'huge'} fluid>
              <HeaderMenu />
            </Menu>
          )
        }
      </Media>
    </Fragment>
  );
};

export default Header;
