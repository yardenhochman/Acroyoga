import React from 'react';
import LoadDisplay from '../../../UI/Loader';
import {
	Desktop,
	Phone_Portrait,
	Phone_Landscape,
} from '../../../../DeviceRules';
import styler from 'react-styling';
import Radium from '../../../../ConfiguredRadium';
import { StyleRoot } from 'radium';
import VisibilitySensor from 'react-visibility-sensor';

const PosePicture = ({ img }) => (
	<StyleRoot>
		<VisibilitySensor>
			<img
				src={img}
				style={style.image}
				alt={'Loading...'}
				loader={LoadDisplay}
			/>
		</VisibilitySensor>
	</StyleRoot>
);

export default Radium(PosePicture);

var style = styler`
image 
  @media ${Phone_Portrait}
    max-height: 60vh
    width: auto
    max-width: 100vw
    border-radius: 5px
    min-width: auto
    
  @media ${Phone_Landscape}
    height: 101vh
    width: auto
    max-width: 100vw
    border-radius: 5px

  @media ${Desktop}
    height: 50vw
    max-height: 70vh
    width: auto
    border-radius: 5px
`;
