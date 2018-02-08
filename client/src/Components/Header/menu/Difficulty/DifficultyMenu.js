import React, { Component } from 'react';

import DifficultyList from './DifficultyList';
import { Dropdown } from 'semantic-ui-react';

class DifficultyMenu extends Component {
  render = () => {
    const colors = { All: '', Easy: 'green', Intermediate: 'blue', Hard: 'red', Expert: 'purple' };

    return <Dropdown item icon={<i className={`fa fa-filter fa-lg fa-filter-${colors[this.props.difficultySetting]}`} aria-hidden="true" />}>
        <Dropdown.Menu>
          <DifficultyList />
        </Dropdown.Menu>
      </Dropdown>;
  };
}
export default DifficultyMenu;
