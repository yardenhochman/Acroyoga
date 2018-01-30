import React from 'react';
import { Menu } from 'semantic-ui-react';

const TagChoice = (filter, filterValue, mode, setFilter, setMode, setTag, userSavedLists, tag) =>
  userSavedLists.map((list, i) => {
    const favorites = (
      <i className="fa fa-heart-o text-danger" aria-hidden="true" onClick={() => setTag('favorites', 0)}>
        {' '}
        Favorites
      </i>
    );
    const favoritesChosen = (
      <i className="tags icon" aria-hidden="true" onClick={() => setTag('')}>
        {' '}
      </i>
    );
    return (
      <Menu.Item key={i} name={list}>
        {!tag ? favorites : favoritesChosen}
      </Menu.Item>
    );
  });
export default TagChoice;
