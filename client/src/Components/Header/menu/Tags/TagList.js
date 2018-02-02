import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

const TagList = ({ tag, userLists, setTag }) => {
  return userLists.map((list, i) => {
    const favorites = (
      <i className="fa fa-heart-o text-danger" aria-hidden="true" onClick={() => setTag('favorites',0)} />
    );
    const favoritesChosen = <i className="tags icon" aria-hidden="true" onClick={() => setTag('',0)} />;
    return (
      <Menu.Item key={i} name={list}>
        {!tag ? favorites : favoritesChosen}
      </Menu.Item>
    );
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
