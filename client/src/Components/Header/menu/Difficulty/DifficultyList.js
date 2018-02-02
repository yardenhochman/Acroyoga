import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

import { Menu } from 'semantic-ui-react';

const DifficultyList = ({ difficultySetting, setFilter }) => {
  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Expert'];
  return difficulties.map((difficulty, i) => (
    <Menu.Item
      key={i + difficulty}
      className={`btn ${difficultySetting === difficulty ? ' active' : ' inactive'}`}
      name={difficulty}
      onClick={difficult => setFilter('difficulty', difficulty)}
    />
  ));
};

const mapStateToProps = state => {
  const { view: { difficulty } } = state;
  return { difficultySetting: difficulty };
};
const mapDispatchToProps = dispatch => {
  const { FILTER } = actionTypes;
  return {
    setFilter: (filters, value) =>
      dispatch({
        type: FILTER,
        filters,
        value,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DifficultyList);
