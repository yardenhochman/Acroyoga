import React, { Fragment } from 'react';
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Media from 'react-media';
import Img from 'react-image';

const preloadedDefault = {
  mobile: 5,
  desktop: 20,
};

const MobileCardPortrait = (mode, name, difficulty, img, cardIndex, currentSlideIndex) => {
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
  let display;
  if (Math.abs(cardIndex - currentSlideIndex) < preloadedDefault.mobile)
    display = (
      <div style={cardStyle}>
        <CardMedia>
          <Img
            src={img}
            style={imageStyle}
            alt={'to be added'}
            loader={<CircularProgress color="red" size={80} thickness={5} />}
          />
        </CardMedia>
        <CardTitle
          title={name}
          titleStyle={titleStyle}
          subtitleStyle={subStyle}
          subtitle={`${mode === 'all' ? `Difficulty: ${difficulty}` : ''}`}
        />
      </div>
    );
  else display = <div />;

  return display;
};
const MobileCardLandscape = (mode, name, difficulty, img, cardIndex, currentSlideIndex) => {
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
  let display;
  if (Math.abs(cardIndex - currentSlideIndex) < preloadedDefault.mobile)
    display = (
      <Fragment>
        <CardMedia
          overlayContentStyle={overlayStyle}
          overlay={
            <CardTitle
              title={name}
              titleStyle={titleStyle}
              subtitle={`${mode === 'all' ? `Difficulty: ${difficulty}` : ''}`}
            />
          }
        >
          <Img
            src={img}
            style={imageStyle}
            alt={'to be added'}
            loader={<CircularProgress color="red" size={80} thickness={5} />}
          />
        </CardMedia>
      </Fragment>
    );
  else display = <div />;
  return display;
};
const DesktopCard = (
  id,
  mode,
  name,
  difficulty,
  img,
  poses,
  makeFavorite,
  unFavorite,
  isFavorite,
  displayHeart,
  cardIndex,
  currentSlideIndex,
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
  let display;
  if (Math.abs(cardIndex - currentSlideIndex) < preloadedDefault.desktop)
    display = (
      <Fragment>
        <CardMedia>
          {Math.abs(cardIndex - currentSlideIndex) < 3 && (
            <Img
              src={img}
              style={imageStyle}
              alt={'to be added'}
              loader={<CircularProgress color="red" size={80} thickness={5} />}
            />
          )}
        </CardMedia>
        <div style={cardInfoStyle}>
          {renderFavIcon()}
          <CardTitle
            style={textAreaStyle}
            title={name}
            titleStyle={titleStyle}
            subtitleStyle={subStyle}
            subtitle={`${mode === 'all' ? `Difficulty: ${difficulty}` : ''}`}
          />
        </div>
      </Fragment>
    );
  else display = <div />;
  return display;
};
const PoseCard = (
  { img, name, difficulty, id },
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
  return (
    <Card style={cardStyle} key={img} className="poseCard Cards">
      <Media query={{ minWidth: 900 }}>
        {matches =>
          matches &&
          DesktopCard(
            id,
            mode,
            name,
            difficulty,
            img,
            poses,
            makeFavorite,
            unFavorite,
            isFavorite,
            displayHeart,
            cardIndex,
            currentSlideIndex,
          )
        }
      </Media>
      <Media query={{ minWidth: 450, maxWidth: 900 }}>
        {matches => matches && MobileCardLandscape(mode, name, difficulty, img, cardIndex, currentSlideIndex)}
      </Media>
      <Media query={{ maxWidth: 450 }}>
        {matches => matches && MobileCardPortrait(mode, name, difficulty, img, cardIndex, currentSlideIndex)}
      </Media>
    </Card>
  );
};

export default PoseCard;
