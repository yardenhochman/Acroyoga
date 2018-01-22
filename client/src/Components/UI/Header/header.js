import React, { Fragment } from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import difficultyButtons from './Difficulty/diff_buttons';
import TagChoice from './Tags/tags';
import Popup from './Popup/popup';
import Media from 'react-media';

const Header = ({ mode, setMode, filterValue, filter, setFilter, userName, logOut }) => {
  console.log('Header updated', userName);
  const setFilterColor = (mode, filterValue) => {
    console.log(mode);
    if (mode === 'all') return <i class="fa fa-filter" aria-hidden="true" />;
    switch (filterValue) {
      case 'Easy':
        return <i class="fa fa-filter text-success" aria-hidden="true" />;
      case 'Intermediate':
        return <i class="fa fa-filter text-info" aria-hidden="true" />;
      case 'Hard':
        return <i class="fa fa-filter text-warning" aria-hidden="true" />;
      case 'Expert':
        return <i class="fa fa-filter text-danger" aria-hidden="true" />;
    }
  };
  const HeaderItems = () => (
    <Fragment>
      <Dropdown item text={setFilterColor(mode, filterValue)}>
        <Dropdown.Menu>{difficultyButtons(filter, filterValue, mode, setFilter, setMode)}</Dropdown.Menu>
      </Dropdown>
      {/*userName && */<Dropdown item text={<i class="tags icon" />}>
        <Dropdown.Menu>{TagChoice(filter, filterValue, mode, setFilter, setMode)}</Dropdown.Menu>
      </Dropdown>}
      <Menu.Menu position="right">{profileButton}</Menu.Menu>
    </Fragment>
  );
  let profileButton;
  if (userName) profileButton = <Button onClick={logOut} color="black">{`${userName} logout`}</Button>;
  else profileButton = <Popup userName={userName} />;
  return (
    <Fragment>
      <Media query={{ minWidth: 1000 /* Desktop */ }}>
        {matches =>
          matches && (
            <Menu inverted className="header" size={'large'} fluid>
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
            <Menu inverted className="header" size={'huge'} fluid>
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
