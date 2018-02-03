import React, { Component } from 'react';

import DifficultyList from './DifficultyList';
import { Dropdown } from 'semantic-ui-react';

class DifficultyMenu extends Component {
  render = () => {
    const colors = {
      All: '',
      Easy: 'green',
      Intermediate: 'yellow',
      Hard: 'blue',
      Expert: 'red'
    };

    return (
      <Dropdown item text={<i className={`fa fa-filter fa-filter-${colors[this.props.difficultySetting]}`} aria-hidden="true" />}>
        <Dropdown.Menu>
          <DifficultyList />
        </Dropdown.Menu>
      </Dropdown>
    );
  };
}
export default DifficultyMenu;
