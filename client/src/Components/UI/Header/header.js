import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import difficultyButtons from './Difficulty/diff_buttons';

const Header = ({ mode, setMode, filterValue, filter, setFilter }) => {
  return (
    <Menu inverted className="header" size={'massive'} fluid>
      <Dropdown item text={mode === 'all' ? `All Levels` : filterValue}>
        <Dropdown.Menu>{difficultyButtons(filter, filterValue, mode, setFilter, setMode)}</Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Menu.Item name="logout" active onClick={this.handleItemClick} />
      </Menu.Menu>
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
