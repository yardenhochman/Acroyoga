import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

const TagList = ({ tag, userLists, setTag }) => {
  return userLists.map((list, i) => {
    const favorites = <Menu.Item key={i} name={list} onClick={() => setTag("favorites", 0)}>
        <i className="fa fa-heart-o text-danger" aria-hidden="true" />
      </Menu.Item>;
    const favoritesChosen = <Menu.Item key={i} name={list}>
        <i className="tags icon" aria-hidden="true" onClick={() => setTag("", 0)} />
      </Menu.Item>;

    return !tag ? favorites : favoritesChosen
  });
};
const mapStateToProps = state => {
  const { view: { tag }, user: { lists } } = state;
  const userLists = lists && Object.keys(lists);
  return { tag, userLists };
};
const mapDispatchToProps = dispatch => {
  const { SET_TAG } = actionTypes;
  return {
    setTag: (tag,currentSlide) =>
      dispatch({
        type: SET_TAG,
        tag,
        currentSlide
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
