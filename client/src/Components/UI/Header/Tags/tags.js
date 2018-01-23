import React from 'react';
import { Menu } from 'semantic-ui-react';

const TagChoice = (filter, filterValue, mode, setFilter, setMode, lists) =>
  lists.map((list, i) => (
    <Menu.Item key={i} name={list}>
      <i class="fa fa-heart-o" aria-hidden="true" />
    </Menu.Item>
  ));
export default TagChoice;
