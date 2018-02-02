import React from 'react';
import styled from 'styled-components';

const Navigation = ({next,prev}) => {
  const LeftButton = styled.a`
    height: 6vh;
    gridarea: leftArrow;
    cursor: pointer;
  `;
  const RightButton = styled.a`
    height: 6vh;
    gridarea: rightArrow;
    cursor: pointer;
  `;
  const buttonInnerStyle = {
    margin: `0 18vw`,
    cursor: `pointer`,
  };
  const Control = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 80vh;
  `;

  return (
    <Control>
      <LeftButton onClick={prev}>
        <i style={buttonInnerStyle} className="fa fa-arrow-left fa-4x " />
      </LeftButton>
      <RightButton onClick={next}>
        <i style={buttonInnerStyle} className="fa fa-arrow-right fa-4x " />
      </RightButton>
    </Control>
  );
};

export default Navigation;
