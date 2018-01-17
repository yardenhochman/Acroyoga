import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';

const isActive = (difficulty, filter, filterValue, mode) => {
  if (mode === 'all' && difficulty === 'All') return true;
  if (mode === 'filtered' && filterValue === difficulty) return true;
  return false;
};

const isFilter = difficulty => {
  if (difficulty === 'All') return false;
  return true;
};

const difficultyButtons = (filter, filterValue, mode, setFilter, setMode) => {
  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Really Hard', 'Expert'];
  const colors = ['black', 'green', 'yellow', 'orange', 'red', 'purple'];
  return difficulties.map((difficulty, i) => <Menu.Item key={i} className={'btn' + (isActive(difficulty, filter, filterValue, mode) ? ' active' : ' inactive')} name={difficulty} onClick={isFilter(difficulty) ? () => setFilter('difficulty', difficulty) : () => setMode('all')} color={colors[i]} />);
};
export default difficultyButtons;
