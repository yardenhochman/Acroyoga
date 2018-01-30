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
  mode,
  poses,
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
    mobile: 15,
    desktop: 30,
  };
  const renderSubtitle = (mode, difficulty) => `${mode === 'all' ? `Difficulty: ${difficulty}` : ''}`;
  const desktopCheck = () => {
    const desktopDisplay = DesktopCard(
      pose,
      mode,
      poses,
      makeFavorite,
      unFavorite,
      isFavorite,
      displayHeart,
      cardIndex,
      currentSlideIndex,
      preloadedDefault,
      renderSubtitle,
    );
    return <Media query={{ minWidth: 900 }}>{matches => matches && desktopDisplay}</Media>;
  };
  const landscapeCheck = () => {
    const landscapeDisplay = MobileCardLandscape(
      pose,
      mode,
      cardIndex,
      currentSlideIndex,
      preloadedDefault,
      renderSubtitle,
    );
    return <Media query={{ minWidth: 450, maxWidth: 900 }}>{matches => matches && landscapeDisplay}</Media>;
  };
  const portraitCheck = () => {
    const portraitDisplay = MobileCardPortrait(
      pose,
      mode,
      cardIndex,
      currentSlideIndex,
      preloadedDefault,
      renderSubtitle,
    );
    return <Media query={{ maxWidth: 450 }}>{matches => matches && portraitDisplay}</Media>;
  };
  return (
    <Card style={cardStyle} key={pose.img} className="poseCard Cards">
      {desktopCheck()}
      {landscapeCheck()}
      {portraitCheck()}
    </Card>
  );
};

export default PoseCard;
