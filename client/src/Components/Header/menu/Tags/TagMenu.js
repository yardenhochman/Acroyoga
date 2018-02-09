import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown,Icon } from 'semantic-ui-react';
import TagList from './TagList';

class TagMenu extends Component {
  determineIcon = () => {
    switch (this.props.tag) {
      case '':
        return <Icon name='tags' size='big' />
      case 'favorites':
        return <Icon name="heart" color='green' size="big" />;
      default:
    }
  };

  render = () => {
    return (
      <Dropdown item icon={this.determineIcon()}>
        <Dropdown.Menu>
          <TagList />
        </Dropdown.Menu>
      </Dropdown>
    );
  };
}
const mapStateToProps = state => {
  const { view: { tag } } = state;
  return { tag };
};

export default connect(mapStateToProps)(TagMenu);
