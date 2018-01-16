import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import ReactSwipe from 'react-swipe';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

const style = { maxWidth: '50vw', maxHeight: '50vw' };

const Cards = () => (
  <Card>
    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button href="#">Button</Button>
    </CardBody>
  </Card>
);

const PoseDisplay = ({ setMode, poses, setFilter, filter, filterValue, mode }) => (
  <div className="poses-container">
    <div className="left-button">
      <button className="glyphicon glyphicon-menu-left" type="button" onClick={() => this.reactSwipe.prev()} />
    </div>
    <Cards />
    <div className="carousel-container">
      <ReactSwipe ref={reactSwipe => (this.reactSwipe = reactSwipe)} className="carousel" swipeOptions={{ continuous: true }} key={(poses.length + 15124211).toString()}>
        {poses.map((pose, i) => (
          <div key={pose.img}>
            <h1 className="hello">{pose.name}</h1>
            <img style={style} src={pose.img} alt={'to be added'} />
            {mode === 'random' && <h2>Difficulty: {pose.difficulty}</h2>}
            <h2>Participants:{pose.number_of_people}</h2>
            <h2>Type:{pose.type}</h2>
          </div>
        ))}
      </ReactSwipe>
    </div>

    <div className="right-button">
      <button className="glyphicon glyphicon-menu-right" type="button" onClick={() => this.reactSwipe.next()} />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PoseDisplay);
