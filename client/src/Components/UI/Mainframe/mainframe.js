import React, { Fragment } from 'react';

const Mainframe = ({ pose }) => {
  console.log(pose);
  const style = {
    maxWidth: '50vw',
    maxHeight: '50vw'
  };
  return (
    <Fragment>
      <h1>Difficulty:{pose.Difficulty}</h1>
      <img style={style} src={pose.img} />
    </Fragment>
  );
};

export default Mainframe;
