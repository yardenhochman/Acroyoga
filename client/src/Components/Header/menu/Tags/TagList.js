import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { set_tag } from '../../../../store/actions/actions';
import { Icon } from 'semantic-ui-react';

const TagList = ({ tag, userLists, setTag }) => {
  return userLists.map((list, i) => {
    const favorites = <Menu.Item key={i} name={list} onClick={() => setTag('favorites', 0)}>
        <Icon name="empty heart" size="huge" />Favorites
      </Menu.Item>;
    const favoritesChosen = <Menu.Item key={i} name={list} onClick={() => setTag('', 0)}>
        <Icon name="empty heart" color='green' size="huge" />Favorites
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
