import React, { Fragment } from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import loader from './loader';
import Media from 'react-media';
import Img from 'react-image';
import DesktopCard from './DesktopView/desktopCard';
import MobileCardPortrait from './MobileView/mobilePortraitCard';
import MobileCardLandscape from './MobileView/mobileLandscapeCard';

const PoseCard = (
  pose,
  subtitle,
  makeFavorite,
  unFavorite,
  isFavorite,
  displayHeart,
  cardIndex,
  currentSlideIndex,
) => {
  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '50vw',
    backgroundColor: 'white',
  };
  const preloadedDefault = {
    mobile: 2,
    desktop: 2,
  };
  const renderPic = preload => {
    const differenceFromCurrentCard = Math.abs(cardIndex - currentSlideIndex);
    return differenceFromCurrentCard < preload || differenceFromCurrentCard > 105 - preload ? true : false;
  };
  const renderFavIcon = () => {
    const { id } = pose;
    const favStyle = {
      width: '5vw',
      height: '5vh',
      display: 'flex',
      gridColumnStart: '1',
      gridRow: '2',
      alignItems: 'center',
      cursor: 'pointer',
      color: 'black',
    };
    const favStyleOnHover = {
      width: '5vw',
      height: '5vh',
      display: 'flex',
      gridColumnStart: '1',
      gridRow: '2',
      alignItems: 'center',
      cursor: 'pointer',
      color: 'yellow',
    };
    const emptyHeart = (
      <a style={favStyle} onClick={makeFavorite}>
        <i className={`fa fa-heart-o fa-3x empty-heart${id}`} aria-hidden="true" />
      </a>
    );
    const fullHeart = (
      <a style={favStyle} onClick={unFavorite}>
        <i className={`fa fa-heart fa-3x full-heart${id}`} aria-hidden="true" />
      </a>
    );
    if (!displayHeart) return;
    if (!isFavorite) return emptyHeart;
    return fullHeart;
  };
  const heart = renderFavIcon();
  const closeToCurrentViewDesktop = renderPic(preloadedDefault.desktop);
  const closeToCurrentViewMobile = renderPic(preloadedDefault.mobile);

  const desktopCheck = () => (
    <Media query={{ minWidth: 900 }}>
      {matches => matches && DesktopCard(pose, closeToCurrentViewDesktop, heart, subtitle)}
    </Media>
  );
  const landscapeCheck = () => (
    <Media query={{ minWidth: 450, maxWidth: 900 }}>
      {matches => matches && MobileCardLandscape(pose, closeToCurrentViewMobile, subtitle)}
    </Media>
  );
  const portraitCheck = () => (
    <Media query={{ maxWidth: 450 }}>
      {matches => matches && MobileCardPortrait(pose, closeToCurrentViewMobile, subtitle)}
    </Media>
  );
  return (
    <Card style={cardStyle} key={pose.img} className="poseCard Cards">
      {desktopCheck()}
      {landscapeCheck()}
      {portraitCheck()}
    </Card>
  );
};

export default PoseCard;
