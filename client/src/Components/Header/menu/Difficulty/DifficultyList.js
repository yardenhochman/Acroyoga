import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

import { Menu } from 'semantic-ui-react';

const DifficultyList = ({ difficultySetting, setDifficulty }) => {
  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Expert'];
  return difficulties.map((difficulty, i) => (
    <Menu.Item
      key={i + difficulty}
      className={`btn ${difficultySetting === difficulty ? ' active' : ' inactive'}`}
      name={difficulty}
      onClick={difficult => setDifficulty(difficulty, 0)}
    />
  ));
};

const mapStateToProps = state => {
  const { view: { difficulty } } = state;
  return { difficultySetting: difficulty };
};
const mapDispatchToProps = dispatch => {
  const { FILTER_DIFFICULTY } = actionTypes;
  return {
    setDifficulty: (difficulty, currentSlide) =>
      dispatch({
        type: FILTER_DIFFICULTY,
        difficulty,
        currentSlide,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DifficultyList);
