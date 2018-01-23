import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import ReactSwipe from 'react-swipe';
import PoseCard from './PoseCard/poseCard';
import Media from 'react-media';
import { isDirty } from 'redux-form';
import { ItemDescription, Ref } from 'semantic-ui-react';

class PoseDisplay extends Component {
  makeFavorite = () => {
    const { poses, unMarkPose, markPose } = this.props;
    const getPos = () => poses[this.reactSwipe.getPos(1)];
    let viewedPose = getPos();
    const $selectedHeart = document.querySelector(`.empty-heart${viewedPose.id}`);
    if ($selectedHeart !== null) {
      $selectedHeart.className = `fa fa-heart fa-3x full-heart${viewedPose.id}`;
      this.props.markPose(viewedPose.id, 'Favorites');
    } else {
      const $changedHeart = document.querySelector(`.full-heart${viewedPose.id}`);

      $changedHeart.className = `fa fa-heart-o fa-3x empty-heart${viewedPose.id}`;
      unMarkPose(viewedPose.id, 'Favorites');
    }
  };
  unFavorite = () => {
    const { poses, unMarkPose, markPose } = this.props;
    const getPos = () => poses[this.reactSwipe.getPos(1)];
    let viewedPose = getPos();
    const $selectedHeart = document.querySelector(`.full-heart${viewedPose.id}`);
    if ($selectedHeart !== null) {
      $selectedHeart.className = `fa fa-heart-o fa-3x empty-heart${viewedPose.id}`;
      unMarkPose(viewedPose.id, 'Favorites');
    } else {
      const $changedHeart = document.querySelector(`.empty-heart${viewedPose.id}`);

      $changedHeart.className = `fa fa-heart fa-3x full-heart${viewedPose.id}`;
      markPose(viewedPose.id, 'Favorites');
    }
  };
  navButtons = () => {
    const leftArrow = {
      height: '6vh',
      marginTop: '2vh',
      gridArea: 'leftArrow',
    };
    const rightArrow = {
      height: '6vh',
      marginTop: '2vh',
      gridArea: 'rightArrow',
    };
    const next = () => this.reactSwipe.next();
    const prev = () => this.reactSwipe.prev();
    return (
      <Fragment>
        <a className="btn btn-light" style={leftArrow} onClick={prev}>
          <i className="fa fa-arrow-circle-o-left fa-4x " />
        </a>
        <a className="btn btn-light" style={rightArrow} onClick={next}>
          <i className="fa fa-arrow-circle-o-right fa-4x " />
        </a>
      </Fragment>
    );
  };
  swipeArea = () => {
    const { name: userName, poses, mode, lists } = this.props;
    return (
      <ReactSwipe
        className="PoseDisplay"
        ref={reactSwipe => (this.reactSwipe = reactSwipe)}
        swipeOptions={{ continuous: true }}
        key={poses.length + lists && lists.Favorites ? lists.Favorites.length : 1}
      >
        {poses.map(pose => {
          //if there's a favorites list, and pose.id is present
          //set favorite=true
          let isFavorite = true;
          const id = Number(pose.id);
          if (!userName || lists.Favorites.indexOf(Number(pose.id)) == -1) isFavorite = false;
          const inputRef = el => (this.inputElement = el);
          return PoseCard(pose, mode, poses, this.makeFavorite, this.unFavorite, isFavorite, userName);
        })}
      </ReactSwipe>
    );
  };
  //PoseCard(pose, mode, poses, lists)
  render = () => {
    const { poses, markPose, lists } = this.props;
    console.log('poseDisplay updated');
    let cardActionsStyle = {
      display: 'grid',
      gridTemplateColumns: '25% auto 10% 10% auto 25% ',
      gridTemplateAreas: `". favStyle leftArrow rightArrow . ."`,
    };
    cardActionsStyle = {};

    const setSlide = () => this.reactSwipe.slide(1, 1000);
    const checkMatch = (id, poseList, name) => {
      markPose(id, name);
      const favorites = poseList.Favorites;
      console.log(id, poseList);
      console.log(favorites.indexOf(id.Number));
    };

    return (
      <div className="poses-container">
        <div className="carousel-container">
          {this.swipeArea()}
          <Media query={{ minWidth: 1000 }}>
            {matches => matches && <div style={cardActionsStyle}>{this.navButtons()}</div>}
          </Media>
        </div>
      </div>
    );
  };
}
const mapStateToProps = state => {
  const { pose: { poses }, view: { mode, filter, filterValue }, user: { name, lists } } = state;
  return { poses, mode, filter, filterValue, lists, name };
};

const mapDispatchToProps = dispatch => {
  const { SETMODE, FILTER } = actionTypes;
  return {
    setMode: mode => dispatch({ type: SETMODE, mode }),
    setFilter: (setFilter, value) => dispatch({ type: FILTER, setFilter, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseDisplay);
