import React from 'react';
//import Card from 'material-ui/Card';
//import { Card } from 'antd';
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';

//const { Meta } = Card;

const PoseCard = ({ img, name }, prev, next) => {
  console.log('cardPrinted')
  return (
    <Card key={img}>
      <CardMedia overlay={<CardTitle title={name} subtitle={name} />}>
        <img src={img} alt={'to be added'} />
      </CardMedia>
      <CardActions>
        {' '}
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
