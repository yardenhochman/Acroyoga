import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import ReactSwipe from 'react-swipe';
//import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact'; issues importing
import { Button } from 'semantic-ui-react';
//import { Card } from 'antd';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
//import Card from 'material-ui@next/Card';
//import poseCard from './PoseCard/poseCard';

import 'antd/dist/antd.css';

const style = { maxWidth: '50vw', maxHeight: '50vw' };
const { Meta } = Card;

const PoseDisplay = ({ setMode, poses, setFilter, filter, filterValue, mode }) => (
  <div className="poses-container">
    {
      <div className="carousel-container">
        <ReactSwipe ref={reactSwipe => (this.reactSwipe = reactSwipe)} className="carousel" swipeOptions={{ continuous: true }} key={(poses.length + 15124211).toString()}>
          {poses.map(pose => (
            <Card>
              <CardMedia
                overlay={<CardTitle title={pose.name}
                  subtitle={pose.name} />}
              >
                <img src={pose.img} alt={'to be added'} />
              </CardMedia>  
            </Card>

          )
          )}
          {/*poses.map((pose, i) => (
            <Card
              hoverable
              key={pose.img}
              className="poseCard"
              bordered
              cover={
                <div className="block">
                  <picture>
                    <img src={pose.img} alt={'to be added'} />
                  </picture>
                </div>
              }
            >
              <Meta
                description=
                {`Participants:${pose.number_of_people} Type:${pose.type} ${mode === 'all' && `Difficulty: ${pose.difficulty}`}`} title={pose.name} />
            </Card>
          ))*/}
        </ReactSwipe>
      </div>
    }
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

/*
<button className="glyphicon glyphicon-menu-left left-button" type="button" onClick={() => this.reactSwipe.prev()} />
              <button className="glyphicon glyphicon-menu-right right-button" type="button" onClick={() => this.reactSwipe.next()} />
*/


