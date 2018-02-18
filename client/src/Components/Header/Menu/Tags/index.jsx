import React from 'react';
import { connect } from 'react-redux';
import { Dropdown,Icon } from 'semantic-ui-react';
import TagList from './TagList';

const TagMenu = ({tag,loggedIn}) => {
  const determineIcon = () => {
    switch (tag) {
      case '':
        return <Icon name='tags' size='big' />
      case 'favorites':
        return <Icon name="heart" color='red' size="big" />;
      default:
    }
  };

  return (
    <Dropdown item icon={determineIcon()}>
      <Dropdown.Menu>
        <TagList />
      </Dropdown.Menu>
      </Dropdown>
  );
}
const mapStateToProps = ({ view: { tag }, user: { loggedIn:name } }) => ({ tag, name });

export default connect(mapStateToProps)(TagMenu);