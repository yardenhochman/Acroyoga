import React from 'react';

import DifficultyList from './DifficultyList';
import { Dropdown,Icon } from 'semantic-ui-react';

const DifficultyMenu = ({ difficultySetting }) => (
  <Dropdown
    item
    icon={
      <Icon
        name='filter'
        size='big'
        color={colors[difficultySetting]}
      />
    }>
    <Dropdown.Menu>
      <DifficultyList />
    </Dropdown.Menu>
  </Dropdown>
);
export default DifficultyMenu;

var colors = { All: 'orange', Easy: 'green', Intermediate: 'blue', Hard: 'red', Expert: 'purple' };