import React from 'react';

const Navigation = ({next,prev}) => {

  const buttonInnerStyle = {
    margin: `0 20vw`,
    cursor: `pointer`,
  };

  return (
    <div className='control'>
      <a className='left_button' onClick={prev}>
        <i style={buttonInnerStyle} className="fa fa-arrow-left fa-4x " />
      </a>
      <a className='right_button' onClick={next}>
        <i style={buttonInnerStyle} className="fa fa-arrow-right fa-4x " />
      </a>
    </div>
  );
};

export default Navigation;
