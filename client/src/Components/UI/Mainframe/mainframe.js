import React, { Fragment } from 'react';

const Mainframe = ({ pose }) => {
  console.log(pose);
  const style = {
    maxWidth: '50vw',
    maxHeight: '50vw'
  };
  return (
    <Fragment>
      <h1>{pose.title}</h1>
      <img style={style} src={pose.img} alt={"to be added"}/>
      <h2>Difficulty:{pose.Difficulty}</h2>
      <h2>Participans:{pose.Number_of_persons}</h2>
      <h2>Tagged:{pose.Tagged}</h2>
      <h2>Type:{pose.Position_Type}</h2>
    </Fragment>
  );
};

export default Mainframe;
