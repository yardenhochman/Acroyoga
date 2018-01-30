import React, { Fragment } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Img from 'react-image';
import loader from '../loader';

const MobileCardLandscape = (
  { img, name, difficulty, id },
  mode,
  cardIndex,
  currentSlideIndex,
  preloadedDefault,
  renderSubtitle,
) => {
  console.log('set to Landscape');

  let imageStyle = {
    height: '95vh',
    width: 'auto',
    borderRadius: '5px',
  };
  const overlayStyle = {
    background: 'rgba(0, 0, 0, 0.35) none repeat scroll 0% 0%',
    textAlign: 'left',
  };
  const titleStyle = {
    fontSize: '4vh',
    fontFamily: 'Special Elite',
  };
  const differenceFromCurrentCard = Math.abs(cardIndex - currentSlideIndex);
  const closeToCurrentView =
    differenceFromCurrentCard < preloadedDefault.desktop || differenceFromCurrentCard > 105 - preloadedDefault.desktop
      ? true
      : false;
  const displayCard = (
    <Fragment>
      <CardMedia
        overlayContentStyle={overlayStyle}
        overlay={<CardTitle title={name} titleStyle={titleStyle} subtitle={renderSubtitle(mode, difficulty)} />}
      >
        <Img src={img} style={imageStyle} alt={'to be added'} loader={loader} />
      </CardMedia>
    </Fragment>
  );
  return closeToCurrentView ? displayCard : <div />;
};
export default MobileCardLandscape;
