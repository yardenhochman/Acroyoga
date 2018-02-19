import React, { Component } from 'react';
import { connect } from 'react-redux';
import PoseCard from './PoseCard';
import {checks} from './helpers';

const PosesFilter = ({lists, difficultySetting, tag, poses}) => poses.filter(pose => checks(pose,tag,lists,difficultySetting)).map((pose, cardIndex,filteredPoses) => (
    <PoseCard 
      key={cardIndex + pose.name} 
      pose={pose} 
      cardIndex={cardIndex} 
      filteredPoses={filteredPoses} 
    />
));

const mapStateToProps = ({ pose: { poses }, view: { tag, difficulty }, user: { lists, id } }) => ({ poses, tag, lists, difficultySetting: difficulty });

export default connect(mapStateToProps)(PosesFilter);

