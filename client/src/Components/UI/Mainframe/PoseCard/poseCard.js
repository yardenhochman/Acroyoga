import React, { Fragment } from 'react';
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import { Button } from 'semantic-ui-react';
import CircularProgress from 'material-ui/CircularProgress';
import Media from 'react-media';
import Img from 'react-image';

const MobileCardPortrait = (mode, name, difficulty, img) => {
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
    color: 'white',
  };
  const subStyle = {
    color: 'white',
    marginTop: '1vh',
  };
  const cardStyle = {
    height: '95vh',
    marginTop: '60%',
  };
  return (
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
};
const MobileCardLandscape = (mode, name, difficulty, img) => {
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
  };
  return (
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
};
const DesktopCard = (id, mode, name, difficulty, img, poses, makeFavorite, unFavorite, isFavorite, userName) => {
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
    color: 'white',
  };
  const textAreaStyle = {
    gridArea: 'textArea',
    gridRow: '2',
    gridColumn: '2'
  };
  const subStyle = {
    gridArea: 'sub',
    color: 'white',
    marginBottom: '0',
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
      alignItems: 'center'
    };
    const emptyHeart = (
      <a className={`btn btn-light`} style={favStyle} onClick={makeFavorite}>
        <i className={`fa fa-heart-o fa-3x empty-heart${id}`} aria-hidden="true" />
      </a>
    );
    const fullHeart = (
      <a className="btn btn-light" style={favStyle} onClick={unFavorite}>
        <i className={`fa fa-heart fa-3x full-heart${id}`} aria-hidden="true" />
      </a>
    );
    if (!userName) return;
    if (!isFavorite) return emptyHeart;
    return fullHeart;
  };
  const getPos = () => poses[this.reactSwipe.getPos(1)];
  //const viewedPose = getPos();
  return (
    <Fragment>
      <CardMedia>
        <Img
          src={img}
          style={imageStyle}
          alt={'to be added'}
          loader={<CircularProgress color="red" size={80} thickness={5} />}
        />
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
};
const PoseCard = ({ img, name, difficulty, id }, mode, poses, makeFavorite, unFavorite, isFavorite, userName) => {
  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '50vw',
    backgroundColor: 'black',
    height: '80vh'
  };
  return (
    <Card style={cardStyle} key={img} className="poseCard Cards">
      <Media query={{ minWidth: 900 }}>
        {matches =>
          matches && DesktopCard(id, mode, name, difficulty, img, poses, makeFavorite, unFavorite, isFavorite, userName)
        }
      </Media>
      <Media query={{ minWidth: 450, maxWidth: 900 }}>
        {matches => matches && MobileCardLandscape(mode, name, difficulty, img)}
      </Media>
      <Media query={{ maxWidth: 450 }}>{matches => matches && MobileCardPortrait(mode, name, difficulty, img)}</Media>
    </Card>
  );
};

export default PoseCard;
