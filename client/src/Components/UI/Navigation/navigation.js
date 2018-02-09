import React from 'react';
import { Icon } from 'semantic-ui-react';


const Navigation = ({ next, prev }) => {
  
const RightButtonInnerStyle = {
  margin: `0 0 0 40vw`,
};
  const LeftButtonInnerStyle = { margin: `0 40vw 0 0`,};
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
        <Icon name="chevron left" color="red" style={LeftButtonInnerStyle} size="huge" />
      </a>
      <a style={rightButtonStyle} onClick={next}>
        <Icon name="chevron right" color='red' style={RightButtonInnerStyle} size="huge" />
      </a>
    </div>;
};

export default Navigation;
