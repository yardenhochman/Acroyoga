import React from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import difficultyButtons from './Difficulty/diff_buttons';
import Popup from './Popup/popup';

const Header = ({ mode, setMode, filterValue, filter, setFilter, userName, logOut }) => {
  console.log('Header updated', userName);
  let profileButton;
  if (userName) profileButton = <Button onClick={logOut} color="black">{`${userName} logout`}</Button>;
  else profileButton = <Popup userName={userName} />;
  return (
    <Menu inverted className="header" size={'massive'} fluid>
      <Dropdown item text={mode === 'all' ? `All Levels` : filterValue}>
        <Dropdown.Menu>{difficultyButtons(filter, filterValue, mode, setFilter, setMode)}</Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">{profileButton}</Menu.Menu>
    </Menu>
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
