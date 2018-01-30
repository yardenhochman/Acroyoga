import React from 'react';
import { Menu } from 'semantic-ui-react';

const TagChoice = (filter, filterValue, mode, setFilter, setMode, setTag, lists, tag) =>
  lists.map((list, i) => (
    <Menu.Item key={i} name={list}>
      {!tag
        ? (
        <i className="fa fa-heart-o text-danger" aria-hidden="true" onClick={() => setTag('favorites',0)}>
          {' '}
          Favorites
        </i>
      ) : (
        <i className="tags icon" aria-hidden="true" onClick={() => setTag('')}>
          {' '}
        </i>
      )}
    </Menu.Item>
  ));
export default TagChoice;
