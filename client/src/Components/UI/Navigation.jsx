import React from 'react';
import { Icon } from 'semantic-ui-react';
import styler from 'react-styling';
import Radium from '../../ConfiguredRadium';
import { StyleRoot } from 'radium';

const Navigation = ({ next, prev }) => (
  <StyleRoot style={style.control}>
    <a style={style.arrow_button} onClick={prev} >
      <Icon
        name="chevron left"
        color="pink"
        size="huge"
      />
    </a>
    <a style={style.arrow_button} onClick={next} >
      <Icon
        name="chevron right"
        color="pink"
        size="huge"
      />
    </a>
  </StyleRoot>
);

export default Radium(Navigation);

var style = styler`
  arrow_button
    height: 6vh
    cursor: pointer
    opacity: 0.3
  control
    position: absolute
    z-index: 1
    width: 100%
    top: 45vh
    display: flex
    justify-content: space-between

`;