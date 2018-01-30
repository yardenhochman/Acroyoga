import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import ReactSwipe from 'react-swipe';
import PoseCard from './PoseCard/poseCard';
import Media from 'react-media';
import { isDirty } from 'redux-form';
import styled from 'styled-components';

class PoseDisplay extends Component {
  componentDidMount = () => {
    const { lists, currentSlide, tag } = this.props;
    const setSlide = () => this.reactSwipe.slide(1, 1000);
    const resetSlide = () => lists.Favorites.length < currentSlide && setSlide();
    tag && lists.Favorites && resetSlide();
  };

  makeFavorite = () => {
    const { poses, unMarkPose, markPose, currentSlide } = this.props;
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
    const Left_button = styled.a`
      height: 6vh;
      gridarea: leftArrow;
      cursor: pointer;
    `;
    const Right_button = styled.a`
      height: 6vh;
      gridarea: rightArrow;
      cursor: pointer;
    `;
    const buttonInnerStyle = {
      margin: `0 18vw`,
      cursor: `pointer`,
    };
    const Navigation = styled.div`
      position: absolute;
      z-index: 1;
      width: 100%;
      top: 80vh;
    `;
    /*const leftArrow = {
      height: '6vh',
      gridArea: 'leftArrow',
      color:'black'
    };
    const rightArrow = {
      height: '6vh',
      gridArea: 'rightArrow',
    };*/
    const getPos = () => this.reactSwipe.getPos(1);

    const next = () => this.reactSwipe.next();

    const prev = () => this.reactSwipe.prev();

    return (
      <Navigation>
        <Left_button onClick={prev}>
          <i style={buttonInnerStyle} className="fa fa-arrow-left fa-4x " />
        </Left_button>
        <Right_button onClick={next}>
          <i style={buttonInnerStyle} className="fa fa-arrow-right fa-4x " />
        </Right_button>
      </Navigation>
    );
  };
  swipeArea = () => {
    const { name: userName, poses, mode, lists, tag, setSlide } = this.props;
    const favoritesList = lists && lists.Favorites;

    const checkIfFavorite = (poseId, favoritesList) => {
      return favoritesList && favoritesList.indexOf(Number(poseId)) !== -1;
    };
    const tagCheck = pose => {
      if (tag) {
        return checkIfFavorite(pose.id, favoritesList);
      }
      return true;
    };

    let reactSwipeInstance;

    const posesToDisplay = reactSwipeInstance => {
      const { currentSlide } = this.props;
      return poses.filter(tagCheck).map((pose, index) => {
        //need to create an empty poseCard view in case there are no favorites
        const id = Number(pose.id);
        const isFavorite = checkIfFavorite(pose.id, favoritesList);
        //const inputRef = el => (this.inputElement = el);
        const displayHeart = userName && !tag ? true : false;
        return PoseCard(
          pose,
          mode,
          poses,
          this.makeFavorite,
          this.unFavorite,
          isFavorite,
          displayHeart,
          index,
          currentSlide,
        );
      });
    };
    //const favoritePoses = poses.filter();
    return (
      <ReactSwipe
        className="PoseDisplay"
        ref={reactSwipe => {
          this.reactSwipe = reactSwipe;
        }}
        swipeOptions={{
          continuous: true,
          transitionEnd: (index, elem) => {
            setSlide(index);
          },
        }}
        key={poses.length + tag}
      >
        {posesToDisplay(this.reactSwipe)}
      </ReactSwipe>
    );
  };
  //PoseCard(pose, mode, poses, lists)
  render = () => {
    const { poses, markPose, lists, currentSlide, tag } = this.props;
    console.log('poseDisplay updated');

    const checkMatch = (id, poseList, name) => {
      markPose(id, name);
      const favorites = poseList.Favorites;
    };

    return (
      <div className="poses-container">
        <div className="carousel-container">
          {this.swipeArea()}
          <Media query={{ minWidth: 1000 }}>{matches => matches && <div>{this.navButtons()}</div>}</Media>
        </div>
      </div>
    );
  };
}
const mapStateToProps = state => {
  const { pose: { poses }, view: { mode, filter, filterValue, tag, currentSlide }, user: { name, lists } } = state;
  return { poses, mode, filter, filterValue, lists, name, tag, currentSlide };
};

const mapDispatchToProps = dispatch => {
  const { SET_SLIDE_INDEX } = actionTypes;
  return {
    setSlide: currentSlide =>
      dispatch({
        type: SET_SLIDE_INDEX,
        currentSlide,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseDisplay);
