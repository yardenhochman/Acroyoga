import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import ReactSwipe from 'react-swipe';
class PoseDisplay extends Component {
  render = () => {
    const { setMode, poses, setFilter, filter, filterValue, mode } = this.props;
    const pose = poses[0];
    const style = {
      maxWidth: '50vw',
      maxHeight: '50vw',
    };

    const difficulties = ['Easy', 'Intermediate', 'Hard', 'Really Hard', 'Expert'];

    console.log(filter, filterValue);

    return (
      <Fragment>
        <ReactSwipe ref={reactSwipe => (this.reactSwipe = reactSwipe)} className="carousel" swipeOptions={{ continuous: true }} key={(poses.length+15124211).toString()}>
          {poses.map((pose, i) => (
            <div key={pose.img}>
              <h1 className="hello">{pose.name}</h1>
              <img style={style} src={pose.img} alt={'to be added'} />
              {mode === 'random' && <h2>Difficulty: {pose.difficulty}</h2>}
              <h2>Participans:{pose.number_of_people}</h2>
              <h2>Type:{pose.type}</h2>
            </div>
          ))}
        </ReactSwipe>

        <div>
          <button type="button" onClick={() => this.reactSwipe.prev()}>
            Prev
          </button>
          <button type="button" onClick={() => this.reactSwipe.next()}>
            Next
          </button>
        </div>

        <div className="filters">
          




        </div>
      </Fragment>
    );
  };
}
const mapStateToProps = state => {
  return {
    poses: state.pose.poses,
    mode: state.view.mode,
    filter: state.view.filter,
    filterValue: state.view.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMode: mode =>
      dispatch({
        type: actionTypes.SETMODE,
        mode,
      }),
    setFilter: (setFilter, value) =>
      dispatch({
        type: actionTypes.FILTER,
        setFilter,
        value
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseDisplay);
