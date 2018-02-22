import React from 'react';
import { Desktop, Phone_Portrait } from '../../../../DeviceRules';
import styler from 'react-styling';
import Radium from '../../../../ConfiguredRadium';
import { StyleRoot } from 'radium';

const PoseText = ({ poseTitle, subtitle }) => (
	<StyleRoot>
		<div style={style.details}>
			<div style={style.text_area}>
				<h1 style={style.title}>{poseTitle}</h1>
				<p style={style.subtitle}>{subtitle}</p>
			</div>
		</div>
	</StyleRoot>
);

export default Radium(PoseText);

var style = styler`
  details
    width: 100%

    @media ${Phone_Portrait}
      display: grid 
      grid-template-columns: 5vw auto 5vw 
      grid-template-rows: 20% auto 
      grid-template-area: 'heart | text | .|''.|text|.' 

  text_area
    grid-area: textArea
    grid-row: 2
    grid-column: 2

    @media ${Phone_Portrait}

  title
    grid-area: title
    font-family: Special Elite

    @media ${Phone_Portrait}
      height: 8vh  

    @media ${Desktop}
      margin-top: 2vh

  subtitle
    font-family: Roboto Condensed
    grid-area: sub
    @media ${Phone_Portrait}
      color: black
      margin-top: 1vh
    @media ${Desktop}
      font-size: 2vh
`;
