import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

import { Menu, Dropdown } from 'semantic-ui-react';
import difficultyButtons from './Difficulty/diff_buttons';
import TagChoice from './Tags/tags';
import Popup from './Popup/popup';
import Media from 'react-media';

const Header = props => {
  const logOut = () => {
    const { UserLogout } = props;
    localStorage.removeItem('token');
    UserLogout();
  };
  const filterMenuButtonColor = (mode, filterValue) => {
    let level;
    if (mode === 'all') level = '';
    else {
      switch (filterValue) {
        case 'Easy':
          level = 'fa-filter-green';
          break;
        case 'Intermediate':
          level = 'fa-filter-blue';
          break;
        case 'Hard':
          level = 'fa-filter-red';
          break;
        case 'Expert':
          level = 'fa-filter-purple';
        default:
      }
    }
    return <i className={`fa fa-filter ${level}`} aria-hidden="true" />;
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
  const HeaderItems = profileButton => {
    const { userName, filter, mode, filterValue, setFilter, setMode, tag, setTag, userSavedLists } = props;
    return (
      <Fragment>
        <Dropdown item text={filterMenuButtonColor(mode, filterValue)}>
          <Dropdown.Menu>{difficultyButtons(filter, filterValue, mode, setFilter, setMode)}</Dropdown.Menu>
        </Dropdown>
        {userName && (
          <Dropdown item text={tagMenuButton(tag)}>
            <Dropdown.Menu>
              {TagChoice(filter, filterValue, mode, setFilter, setMode, setTag, userSavedLists, tag)}
            </Dropdown.Menu>
          </Dropdown>
        )}
        <Menu.Menu position="right">{profileButton}</Menu.Menu>
      </Fragment>
    );
  };
  const renderProfileButton = () => {
    const { userName } = props;
    const signOutStyle = {
      cursor: 'pointer',
    };
    const LogOutButton = (
      <Menu.Item>
        <i className="fa fa-sign-out" style={signOutStyle} onClick={logOut} aria-hidden="true">{`${userName}`}</i>
      </Menu.Item>
    );
    const LogInButton = <Popup userName={userName} />;
    const profileButton = userName ? LogOutButton : LogInButton;
    return profileButton;
  };
  const desktopCheck = headerItems => {
    const desktopHeaderDisplay = (
      <Menu borderless className="header" color="yellow" size={'large'} fluid>
        {headerItems}
      </Menu>
    );
    return <Media query={{ minWidth: 1000 }}>{matches => matches && desktopHeaderDisplay}</Media>;
  };
  const landscapeCheck = headerItems => {
    const landsacapeHeaderDisplay = null;
    return (
      <Media query={{ minWidth: 450, maxWidth: 1000 /* Landscape */ }}>
        {matches => matches && landsacapeHeaderDisplay}
      </Media>
    );
  };
  const portraitCheck = headerItems => {
    const portraitHeaderDisplay = (
      <Menu borderless className="header" size={'huge'} fluid>
        {headerItems}
      </Menu>
    );
    return <Media query={{ maxWidth: 450 }}>{matches => matches && portraitHeaderDisplay}</Media>;
  };

  const profileButton = renderProfileButton();
  const headerItems = HeaderItems(profileButton);
  console.log('Header updated');
  return (
    <Fragment>
      {desktopCheck(headerItems)}
      {landscapeCheck(headerItems)}
      {portraitCheck(headerItems)}
    </Fragment>
  );
};
const mapStateToProps = state => {
  const { view: { mode, filter, filterValue, tag }, user: { name, lists } } = state;
  /*const lists = Object.keys(listsObject);*/
  const userName = name;
  const userSavedLists = Object.keys(lists);
  return { mode, filter, filterValue, tag, userName, userSavedLists };
};
const mapDispatchToProps = dispatch => {
  const { SETMODE, SET_TAG, FILTER, LOG_OUT } = actionTypes;
  return {
    setMode: mode =>
      dispatch({
        type: SETMODE,
        mode,
      }),
    setTag: (tag, currentSlide) =>
      dispatch({
        type: SET_TAG,
        tag,
        currentSlide,
      }),
    setFilter: (filters, value) =>
      dispatch({
        type: FILTER,
        filters,
        value,
      }),
    UserLogout: () =>
      dispatch({
        type: LOG_OUT,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

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
