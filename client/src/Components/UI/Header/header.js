import React, { Fragment } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import difficultyButtons from './Difficulty/diff_buttons';
import TagChoice from './Tags/tags';
import Popup from './Popup/popup';
import Media from 'react-media';

const Header = ({ mode, setMode, filterValue, filter, setFilter, userName, logOut, lists, setTag, tag }) => {
  console.log('Header updated', userName);

  const filterMenuButton = (mode, filterValue) => {
    if (mode === 'all') return <i className="fa fa-filter" aria-hidden="true" />;
    switch (filterValue) {
      case 'Easy':
        return <i className="fa fa-filter text-success" aria-hidden="true" />;
      case 'Intermediate':
        return <i className="fa fa-filter text-info" aria-hidden="true" />;
      case 'Hard':
        return <i className="fa fa-filter text-warning" aria-hidden="true" />;
      case 'Expert':
        return <i className="fa fa-filter text-danger" aria-hidden="true" />;
    }
  };

  const tagMenuButton = tag => {
    switch (tag) {
      case '':
        return <i className="tags icon" />;
      case 'favorites':
        return <i className="fa fa-heart-o text-danger" aria-hidden="true" />;
      case 'Intermediate':
        return <i className="fa fa-filter text-info" aria-hidden="true" />;
      case 'Hard':
        return <i className="fa fa-filter text-success " aria-hidden="true" />;
      case 'Expert':
        return <i className="fa fa-filter text-danger" aria-hidden="true" />;
    }
  };

  const HeaderItems = () => (
    <Fragment>
      <Dropdown item text={filterMenuButton(mode, filterValue)}>
        <Dropdown.Menu>{difficultyButtons(filter, filterValue, mode, setFilter, setMode)}</Dropdown.Menu>
      </Dropdown>
      {userName && (
        <Dropdown item text={tagMenuButton(tag)}>
          <Dropdown.Menu>{TagChoice(filter, filterValue, mode, setFilter, setMode, setTag, lists, tag)}</Dropdown.Menu>
        </Dropdown>
      )}
      <Menu.Menu position="right">{profileButton}</Menu.Menu>
    </Fragment>
  );
  let profileButton;
  const signOutStyle = {
    cursor: 'pointer'
  }
  if (userName)
    profileButton = (
      <Menu.Item>
        <i className="fa fa-sign-out" style={signOutStyle} onClick={logOut} aria-hidden="true">{`${userName}`}</i>
      </Menu.Item>
    );
  else profileButton = <Popup userName={userName} />;
  return (
    <Fragment>
      <Media query={{ minWidth: 1000 /* Desktop */ }}>
        {matches =>
          matches && (
            <Menu borderless className="header" color="yellow" size={'large'} fluid>
              {HeaderItems()}
            </Menu>
          )
        }
      </Media>
      <Media query={{ minWidth: 450, maxWidth: 1000 /* Landscape */ }}>
        {/*matches =>
          matches && (
            <Menu inverted className="header" size={'mini'} fluid>
              {HeaderItems()}
            </Menu>
          )
        */}
      </Media>
      <Media query={{ maxWidth: 450 /* Portrait */ }}>
        {matches =>
          matches && (
            <Menu borderless className="header" size={'huge'} fluid>
              {HeaderItems()}
            </Menu>
          )
        }
      </Media>
    </Fragment>
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

/*userName === 'guest' ? <Auth /> : <Lists />
  
  
  improved header concept:
  -display current pose details in menu.
  -When a user sets a filter, the color changes to reflect permanance
  
  */
