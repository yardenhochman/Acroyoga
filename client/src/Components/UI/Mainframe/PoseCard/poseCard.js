import React from 'react';
//import Card from 'material-ui/Card';
import { Card } from 'antd';
const { Meta } = Card;

const PoseCard = ({ pose, mode }) => {
  const { img, number_of_people, type, difficulty, name } = pose;
  return (
    <div>
      <Card hoverable key={img} bordered cover={<img src={img} alt={'to be added'} />}>
        <Meta description={`Participants:${number_of_people} Type:${type} ${mode === 'all' && `Difficulty: ${difficulty}`}`} title={name} />
      </Card>
    </div>
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
