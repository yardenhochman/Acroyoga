import React, { Fragment } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Img from 'react-image';
import loader from '../loader';

const DesktopCard = (
  { img, name, difficulty, id },
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
) => {
  const imageStyle = {
    height: '50vw',
    maxHeight: '70vh',
    width: 'auto',
    borderRadius: '5px',
  };
  const titleStyle = {
    gridArea: 'title',
    height: '7vh',
    marginTop: '2vh',
    color: 'black',
    fontFamily: 'Special Elite',
  };
  const textAreaStyle = {
    gridArea: 'textArea',
    gridRow: '2',
    gridColumn: '2',
  };
  const subStyle = {
    gridArea: 'sub',
    color: 'black',
    marginBottom: '0',
    fontFamily: 'Roboto Condensed',
  };
  let cardInfoStyle = {
    display: 'grid',
    height: '15vh',
    gridTemplateColumns: '15% auto 15%',
    gridTemplateRows: '10% auto 10%',
  };
  //cardInfoStyle = {};

  const renderFavIcon = () => {
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

  //reactSwipeInstance&&console.log(reactSwipeInstance.getPos(1));
  //const viewedPose = getPos();
  const differenceFromCurrentCard = Math.abs(cardIndex - currentSlideIndex);
  const closeToCurrentView =
    differenceFromCurrentCard < preloadedDefault.desktop || differenceFromCurrentCard > 105 - preloadedDefault.desktop
      ? true
      : false;
  const displayCard = (
    <Fragment>
      <CardMedia>
        <Img src={img} style={imageStyle} alt={'to be added'} loader={loader} />
      </CardMedia>
      <div style={cardInfoStyle}>
        {renderFavIcon()}
        <CardTitle
          style={textAreaStyle}
          title={name}
          titleStyle={titleStyle}
          subtitleStyle={subStyle}
          subtitle={renderSubtitle(mode, difficulty)}
        />
      </div>
    </Fragment>
  );
  return closeToCurrentView ? displayCard : <div />;
};
export default DesktopCard;
