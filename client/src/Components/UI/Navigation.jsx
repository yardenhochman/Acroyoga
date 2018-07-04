import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components'


const Navigation = ({ next, prev }) => (
  <Control>
    <Arrow_Button onClick={prev} >
      <Icon
        name="chevron left"
        color="pink"
        size="huge"
      />
    </Arrow_Button>
    <Arrow_Button onClick={next} >
      <Icon
        name="chevron right"
        color="pink"
        size="huge"
      />
    </Arrow_Button>
  </Control>
);

export default Navigation;

const Arrow_Button = styled.a`
  height: 6vh;
  cursor: pointer;
  opacity: 0.3;
`;
const Control = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 45vh;
  display: flex;
  justify-content: space-between;
`;