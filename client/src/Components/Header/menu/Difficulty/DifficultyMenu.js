import React, { Component } from 'react';

import DifficultyList from './DifficultyList';
import { Dropdown } from 'semantic-ui-react';

class DifficultyMenu extends Component {
  state = { color: '' };
  componentWillMount = () => {
    const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Expert'];
    const colors = ['', 'green', 'blue', 'red', 'purple'];
    const color = colors[difficulties.indexOf(this.props.difficultySetting)];
    this.setState({ color });
  };
  render = () => {
    return (
      <Dropdown item text={<i className={`fa fa-filter fa-filter-${this.state.color}`} aria-hidden="true" />}>
        <Dropdown.Menu>
          <DifficultyList />
        </Dropdown.Menu>
      </Dropdown>
    );
  };
}
export default DifficultyMenu;
