import React from 'react';
//import Card from 'material-ui/Card';
import { Card } from 'antd';
//import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Media from 'react-media';
//const { Meta } = Card;
import Img from 'react-image';

let imageStyle = {
  maxHeight: '90vh',
  width: 'auto',
  borderRadius: '5px'
}
imageStyle = {};
let poseCardStyle = {
  backgroundColor: 'blue',
  display: 'flex',
  alignItems: 'center',
  marginTop: '-5vh',
  alignContent: 'center',
  justifyContent: 'center',
  width: '100vw',
};
poseCardStyle = {};


const PoseCard = ({ img, name }, prev, next) => {
  console.log('cardPrinted');
  return (
    <Card style={poseCardStyle} key={img} className="poseCard">
      <img src={img} alt={'to be added'} />
    </Card>
    /*<Card style={style} key={img} className="poseCard">
      <CardMedia overlay={<CardTitle title={name} subtitle={name} />}>
        <Img src={img} alt={'to be added'} loader={<CircularProgress color="red" size={80} thickness={5} />} />
      </CardMedia>
      <Media query="(min-width: 1000px)">
        {matches =>
          matches && (
            <CardActions>
              <button
                key="24152141341"
                className="glyphicon glyphicon-menu-left left-button"
                type="button"
                onClick={prev}
              />
              <button
                key="2141251t1rf1"
                className="glyphicon glyphicon-menu-right right-button"
                type="button"
                onClick={next}
              />
            </CardActions>
          )
        }
      </Media>
      </Card >*/
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
