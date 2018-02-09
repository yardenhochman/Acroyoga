import React from 'react';

const Navigation = ({ next, prev }) => {
  
const RightButtonInnerStyle = {
  margin: `0 0 0 40vw`,
  cursor: `pointer`,
  color: '#21ba45',
};
  const LeftButtonInnerStyle = { margin: `0 40vw 0 0`, cursor: `pointer`, color: '#21ba45' };
  const controlStyle = {
    position: 'absolute',
      zIndex: '1',
      width: '100%',
    top: '45vh',
      textAlign: 'center'
  }
  const leftButtonStyle = {
    height: '6vh',
    gridArea: 'leftArrow',
    cursor: 'pointer',
    opacity: '0.3'
  };
  const rightButtonStyle = { height: '6vh', gridArea: 'rightArrow', cursor: 'pointer', opacity: '0.3' };

  return <div style={controlStyle}>
      <a style={leftButtonStyle} onClick={prev}>
        <i style={LeftButtonInnerStyle} className="fa fa-chevron-left fa-3x " />
      </a>
      <a style={rightButtonStyle} onClick={next}>
        <i style={RightButtonInnerStyle} className="fa fa-chevron-right fa-3x " />
      </a>
    </div>;
};

export default Navigation;
