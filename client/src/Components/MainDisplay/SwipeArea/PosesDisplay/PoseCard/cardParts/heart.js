import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove_from_user, add_to_user } from '../../../../../../store/actions/actions';
import { Icon } from 'semantic-ui-react';

import api from '../../../../../../api';

class Heart extends Component {
  state = { display: false, isFavorite: false };
  componentWillMount = () => {
    this.checkIfFavorite();
    this.checkIfLoggedIn();
  };
  checkIfLoggedIn = () => {
    const { userName, tag } = this.props;
    if (userName&&!tag) this.setState({ display: true });
    else this.setState({ display: false });
  };
  checkIfFavorite = () => {
    const { lists, poseID } = this.props;
    lists && lists.Favorites && lists.Favorites.indexOf(poseID) !== -1 && this.setState({ isFavorite: true });
  };
  onClick = e => {
    e.preventDefault();
    this.state.isFavorite ? this.removeFromFavorites() : this.addToFavorites();
  };
  addToFavorites = () => {
    const { poseID, userID, addToUserList } = this.props;
    api.list.add(poseID, userID, 'Favorites');
    addToUserList(poseID, 'Favorites');
    this.setState({ isFavorite: true });
  };
  removeFromFavorites = () => {
    const { poseID, userID, removeFromUserList } = this.props;
    api.list.remove(poseID, userID, 'Favorites');
    removeFromUserList(poseID, 'Favorites');
    this.setState({ isFavorite: false });
  };
  render = () => {
    const { poseID } = this.props;
    const { isFavorite, display } = this.state;

    let favStyle = {
      width: '5vw',
      height: '5vh',
      display: 'flex',
      gridColumnStart: '1',
      gridRow: '2',
      alignItems: 'center',
      cursor: 'pointer',
      color: 'black',
    };
    favStyle={}
    const fullHeart = `heart`;
    const emptyHeart = `empty heart`;
    if (!display) return <div />;
    return <a style={favStyle} onClick={e => this.onClick(e)}>
      <Icon name={isFavorite ? fullHeart : emptyHeart} size="big" color='red'/>
      </a>;
  };
}

const mapStateToProps = state => {
  const { view: { tag }, user: { name, id, lists } } = state;
  return { tag, userName: name, userID: id, lists };
};

const mapDispatchToProps = dispatch => {
  return {
    addToUserList: (pose_id, listName) => dispatch(add_to_user(pose_id, listName)),
    removeFromUserList: (pose_id, listName) => dispatch(remove_from_user(pose_id, listName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heart);
