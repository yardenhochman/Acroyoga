import React, { Fragment } from 'react';
//import Card from 'material-ui/Card';
//import { Card } from 'antd';
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Media from 'react-media';
//const { Meta } = Card;
import Img from 'react-image';

const MobileCardPortrait = (mode, name, difficulty, img, prev, next) => {
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
const MobileCardLandscape = (mode, name, difficulty, img, prev, next) => {
  let imageStyle = {
    height: '95vh',
    width: 'auto',
    borderRadius: '5px',
  };
  const overlayStyle = {
    background: 'rgba(0, 0, 0, 0.35) none repeat scroll 0% 0%',
    textAlign: 'left'
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
const DesktopCard = (name, img, prev, next) => {
  let imageStyle = {
    height: '50vw',
    maxHeight: '70vh',
    width: 'auto',
    borderRadius: '5px',
  };
  return (
    <Fragment>
      <CardMedia overlay={<CardTitle title={name} subtitle={name} />}>
        <Img
          src={img}
          style={imageStyle}
          alt={'to be added'}
          loader={<CircularProgress color="red" size={80} thickness={5} />}
        />
      </CardMedia>

      <CardActions>
        <button key="24152141341" className="glyphicon glyphicon-menu-left left-button" type="button" onClick={prev} />
        <button
          key="2141251t1rf1"
          className="glyphicon glyphicon-menu-right right-button"
          type="button"
          onClick={next}
        />
      </CardActions>
    </Fragment>
  );
};
const PoseCard = ({ img, name, difficulty }, prev, next, mode) => {
  const poseCardStyle = {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '50vw',
    height: '95vh',
    backgroundColor: 'black',
  };
  return (
    <Card style={poseCardStyle} key={img} className="poseCard">
      <Media query={{ minWidth: 1000 }}>{matches => matches && DesktopCard(name, img, prev, next)}</Media>
      <Media query={{ minWidth: 400, maxWidth: 1000 }}>
        {matches => matches && MobileCardLandscape(mode, name, difficulty, img, prev, next)}
      </Media>
      <Media query={{ maxWidth: 400 }}>
        {matches => matches && MobileCardPortrait(mode, name, difficulty, img, prev, next)}
      </Media>
    </Card>
  );
};

export default PoseCard;

/*
const PoseDisplay = ({ setMode, poses, setFilter, filter, filterValue, mode }) => (
  <div className="poses-container">
    <ReactSwipe ref={reactSwipe => (this.reactSwipe = reactSwipe)} className="carousel" swipeOptions={{ continuous: true }} key={(poses.length + 15124211).toString()}>
      <div>PANE 1</div>
      <div>PANE 2</div>
      <div>PANE 3</div>
      {/*poses.map((pose, i) => <PoseCard pose={pose} mode={mode}  />)}
    </ReactSwipe>
    {/*<button className="glyphicon glyphicon-menu-left left-button" type="button" onClick={() => this.reactSwipe.prev()} />
    <button className="glyphicon glyphicon-menu-right right-button" type="button" onClick={() => this.reactSwipe.next()} />}
  </div>
);
const mapStateToProps = state => {
  const { pose: { poses }, view: { mode, filter, filterValue } } = state;
  return { poses, mode, filter, filterValue };
};

const mapDispatchToProps = dispatch => {
  const { SETMODE, FILTER } = actionTypes;
  return {
    setMode: mode => dispatch({ type: SETMODE, mode }),
    setFilter: (setFilter, value) => dispatch({ type: FILTER, setFilter, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseDisplay) 


<Card hoverable key={pose.img} bordered cover={<img src={pose.img} alt={'to be added'} />}>
              <Meta description={`Participants:${pose.number_of_people} Type:${pose.type} ${mode === 'all' && `Difficulty: ${pose.difficulty}`}`} title={pose.name} />


*/
