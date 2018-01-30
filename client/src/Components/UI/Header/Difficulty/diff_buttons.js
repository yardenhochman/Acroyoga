import React from 'react';
import { Menu } from 'semantic-ui-react';

const difficultyButtons = (filter, filterValue, mode, setFilter, setMode) => {
  const isActive = (difficulty, filter, filterValue, mode) => {
    const displayingAll = mode === 'all' && difficulty === 'All';
    const isChosenDifficulty = mode === 'filtered' && filterValue === difficulty;

    const isActive = displayingAll || isChosenDifficulty? true: false;
    return isActive;
  };
  const isThisAFilter = difficulty => (difficulty === 'All' ? false : true);
  
  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Expert'];
  const colors = ['black', 'green', 'yellow', 'orange', 'red', 'purple'];

  return difficulties.map((difficulty, i) => {

    const className = 'btn' + (isActive(difficulty, filter, filterValue, mode) ? ' active' : ' inactive');
    const action = isThisAFilter(difficulty) ? () => setFilter('difficulty', difficulty) : () => setMode('all');

    return (
      <Menu.Item
        key={i}
        className={className}
        name={difficulty}
        onClick={action}
        color={colors[i]}
      />
    )
  });
};
export default difficultyButtons;
