import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { set_tag } from '../../../../store/actions/actions';

const TagList = ({ tag, userLists, setTag }) => {
  return userLists.map((list, i) => {
    const favorites = <Menu.Item key={i} name={list} onClick={() => setTag('favorites', 0)}>
        <i className="fa fa-heart-o fa-lg" aria-hidden="true" />
      </Menu.Item>;
    const favoritesChosen = <Menu.Item key={i} name={list}>
        <i className="fa fa-tags fa-lg" aria-hidden="true" onClick={() => setTag('', 0)} />
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
  return { setTag: (tag, currentSlide) => dispatch(set_tag(tag, currentSlide)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
