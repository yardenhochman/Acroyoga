import React from 'react';

const Navigation = ({ next, prev }) => {
  
const RightButtonInnerStyle = {
  margin: `0 0 0 40vw`,
  cursor: `pointer`,
  color:'black' 
};
  const LeftButtonInnerStyle = {
    margin: `0 40vw 0 0`, cursor: `pointer`,
color:'black'  };
  const controlStyle = {
    position: 'absolute',
      zIndex: '1',
      width: '100%',
      top: '45vh',
  }
  const leftButtonStyle = {
    height: '6vh',
    gridArea: 'leftArrow',
    cursor: 'pointer',
    opacity: '0.4'
  };
  const rightButtonStyle = { height: '6vh', gridArea: 'rightArrow', cursor: 'pointer', opacity: '0.4' };

  return <div style={controlStyle}>
      <a style={leftButtonStyle} onClick={prev}>
        <i style={LeftButtonInnerStyle} className="fa fa-arrow-left fa-4x " />
      </a>
      <a style={rightButtonStyle} onClick={next}>
        <i style={RightButtonInnerStyle} className="fa fa-arrow-right fa-4x " />
      </a>
    </div>;
};

export default Navigation;
