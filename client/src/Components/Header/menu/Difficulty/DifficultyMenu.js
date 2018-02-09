import React, { Component } from 'react';

import DifficultyList from './DifficultyList';
import { Dropdown,Icon } from 'semantic-ui-react';

class DifficultyMenu extends Component {
  render = () => {
    const colors = { All: '', Easy: 'green', Intermediate: 'blue', Hard: 'red', Expert: 'purple' };

    return <Dropdown item icon={<Icon name='filter' size='big' color={colors[this.props.difficultySetting]} />}>
        <Dropdown.Menu>
          <DifficultyList />
        </Dropdown.Menu>
      </Dropdown>;
  };
}
export default DifficultyMenu;
