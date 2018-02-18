import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove_from_user, add_to_user } from '../../../../../../store/actions/actions';
import { Icon } from 'semantic-ui-react';
import api from '../../../../../../API';

class Heart extends Component {
  state = { display: false, isFavorite: false };
  componentWillMount = () => {
    this.checkIfFavorite();
    this.checkIfLoggedIn();
  };
  checkIfLoggedIn = () => {
    if (this.props.userName && !this.props.tag) {
      this.setState({ display: true });
    }
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
    const { isFavorite, display } = this.state;
    
    if (!display) return <div />;
    return (
      <div style={style.clickableArea} onClick={e => this.onClick(e)}>
        <Icon.Group style={style.heartStyle}>
          <Icon
            name={isFavorite ? `heart` : `empty heart`}
            color="red"
          />
        </Icon.Group>
      </div>
    );
  };
}

const mapStateToProps = ({ view: { tag }, user: { name, id, lists } }) => ({ tag, userName: name, userID: id, lists });

const mapDispatchToProps = dispatch => ({
    addToUserList: (pose_id, listName) => dispatch(add_to_user(pose_id, listName)),
    removeFromUserList: (pose_id, listName) => dispatch(remove_from_user(pose_id, listName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Heart);


var style = {
  clickableArea: {
    display: 'flex',
    width: '70px',
    height: '70px',
    paddingLeft: '10px',
  },
  heartStyle: {
    display: 'flex',
    width: '45px',
    height: '45px',
    cursor: 'pointer',
    fontSize: `3em`,
  }
};