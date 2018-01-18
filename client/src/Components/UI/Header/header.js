import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import difficultyButtons from './Difficulty/diff_buttons';
import Popup from './Popup/popup';

const Header = ({ mode, setMode, filterValue, filter, setFilter, userName }) => {
  let buttonDisplay;
  if (userName !== 'guest') buttonDisplay = <Button>{`logout ${userName}`}</Button>;
  else buttonDisplay = <Popup userName={userName} />;
  return (
    <Menu inverted className="header" size={'massive'} fluid>
      <Dropdown item text={mode === 'all' ? `All Levels` : filterValue}>
        <Dropdown.Menu>{difficultyButtons(filter, filterValue, mode, setFilter, setMode)}</Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">{buttonDisplay}</Menu.Menu>
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
{
  /*userName === 'guest' ? <Auth /> : <Lists />*/
}
