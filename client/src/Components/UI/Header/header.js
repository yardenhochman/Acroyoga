import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import difficultyButtons from './Difficulty/diff_buttons';




const Header = ({ mode, setMode, filterValue, filter, setFilter }) => (
  <Menu inverted className="header" widths={'six'} fixed={'top'} size={'massive'} fluid>
    {difficultyButtons(filter, filterValue, mode, setFilter, setMode) /*wrap in div to make vertical*/}
  </Menu>
);
  
export default Header;
