import React from 'react';
import { connect } from 'react-redux';
import { set_difficulty } from '../../../../store/actions/actions';

import { Menu } from 'semantic-ui-react';

const DifficultyList = ({ difficultySetting, setDifficulty }) => {
  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Expert'];
  return difficulties.map((difficulty, i) => (
    <Menu.Item
      key={i + difficulty}
      name={difficulty}
      active={difficultySetting === difficulty}
      onClick={difficult => setDifficulty(difficulty, 0)}
    />
  ));
};

const mapStateToProps = state => {
  const { view: { difficulty } } = state;
  return { difficultySetting: difficulty };
};
const mapDispatchToProps = dispatch => {
  return { setDifficulty: (difficulty, currentSlide) => dispatch(set_difficulty(difficulty, currentSlide)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(DifficultyList);
