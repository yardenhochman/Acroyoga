import React, { Fragment } from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import difficultyButtons from './Difficulty/diff_buttons';
import Popup from './Popup/popup';
import Media from 'react-media';

const Header = ({ mode, setMode, filterValue, filter, setFilter, userName, logOut }) => {
  console.log('Header updated', userName);
  const dropDown = () => (
    <Fragment>
      <Dropdown item text={mode === 'all' ? <i class="fa fa-filter" aria-hidden="true" /> : filterValue}>
        <Dropdown.Menu>{difficultyButtons(filter, filterValue, mode, setFilter, setMode)}</Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">{profileButton}</Menu.Menu>
    </Fragment>
  );
  let profileButton;
  if (userName) profileButton = <Button onClick={logOut} color="black">{`${userName} logout`}</Button>;
  else profileButton = <Popup userName={userName} />;
  return (
    <Fragment>
      <Media query={{ minWidth: 1000 /* Desktop */ }}>
        {matches =>
          matches && (
            <Menu inverted className="header" size={'large'} fluid>
              {dropDown()}
            </Menu>
          )
        }
      </Media>
      <Media query={{ minWidth: 400, maxWidth: 1000 /* Landscape */ }}>
        {/*matches =>
          matches && (
            <Menu inverted className="header" size={'mini'} fluid>
              {dropDown()}
            </Menu>
          )
        */}
      </Media>
      <Media query={{ maxWidth: 400 /* Portrait */ }}>
        {matches =>
          matches && (
            <Menu inverted className="header" size={'large'} fluid>
              {dropDown()}
            </Menu>
          )
        }
      </Media>
    </Fragment>
  );
};

export default Header;

/*


{difficultyButtons(filter, filterValue, mode, setFilter, setMode}

<Dropdown.Item onClick={}>All</Dropdown.Item>
        <Dropdown.Item onClick={}>Easy</Dropdown.Item>
        <Dropdown.Item onClick={}>Intermediate</Dropdown.Item>
        <Dropdown.Item onClick={}>Hard</Dropdown.Item>
        <Dropdown.Item onClick={}>Really Hard</Dropdown.Item>
        <Dropdown.Item onClick={}>Expert</Dropdown.Item>


*/

/*userName === 'guest' ? <Auth /> : <Lists />
  
  
  improved header concept:
  -display current pose details in menu.
  -When a user sets a filter, the color changes to reflect permanance
  
  */
