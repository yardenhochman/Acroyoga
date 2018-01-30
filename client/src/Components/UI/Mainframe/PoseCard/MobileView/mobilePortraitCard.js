import React, { Fragment } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Img from 'react-image';
import loader from '../loader';

const MobileCardPortrait = (
  { img, name, difficulty, id },
  mode,
  cardIndex,
  currentSlideIndex,
  preloadedDefault,
  renderSubtitle,
) => {
  console.log('set to portrait');
  let imageStyle = {
    height: '70vw',
    width: 'auto',
    maxWidth: '55vh',
    borderRadius: '5px',
    minWidth: 'auto',
  };
  const titleStyle = {
    height: '8vh',
    marginTop: '6vh',
    color: 'black',
    fontFamily: 'Special Elite',
  };
  const subStyle = {
    color: 'black',
    marginTop: '1vh',
  };
  const cardStyle = {
    height: '95vh',
    marginTop: '60%',
  };
  const differenceFromCurrentCard = Math.abs(cardIndex - currentSlideIndex);
  const closeToCurrentView =
    differenceFromCurrentCard < preloadedDefault.mobile || differenceFromCurrentCard > 105 - preloadedDefault.mobile
      ? true
      : false;
  const displayCard = (
    <div style={cardStyle}>
      <CardMedia>
        <Img src={img} style={imageStyle} alt={'to be added'} loader={loader} />
      </CardMedia>
      <CardTitle
        title={name}
        titleStyle={titleStyle}
        subtitleStyle={subStyle}
        subtitle={renderSubtitle(mode, difficulty)}
      />
    </div>
  );
  return closeToCurrentView ? displayCard : <div />;
};

export default MobileCardPortrait;
