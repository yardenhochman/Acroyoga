import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import TagList from './TagList';

class TagMenu extends Component {
  determineIcon = () => {
    switch (this.props.tag) {
      case '':
        return <i className="tags icon" />;
      case 'favorites':
        return <i className="fa fa-heart-o text-danger" aria-hidden="true" />;
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
