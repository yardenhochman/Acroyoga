import React, { Fragment } from 'react';
import styled from 'styled-components'
import Media from 'react-media';
import { Phone_Landscape } from '../../../DeviceRules';
import PoseText from './PoseParts/Text';
import PictureArea from './PictureArea';
import { isClose } from '../helpers';

const PoseCard = ({
	pose: { img, difficulty, id, name },
	difficultySetting,
	filteredPoses,
	currentSlide,
	cardIndex,
}) => {
	return (
		<Card key={img}>
			{!isClose(2, filteredPoses, cardIndex, currentSlide) ? (
				<div />
			) : (
				<Fragment>
					<PictureArea img={img} poseID={id} />
					<Media query={`not ${Phone_Landscape}`}>
						<PoseText
							poseTitle={name}
							subtitle={`${
								difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''
							}`}
						/>
					</Media>
				</Fragment>
			)}
		</Card>
	);
};

export default PoseCard;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    align-content: center;
    justify-content: space-evenly;
    width: 100%;
    background-color: white;
    float: left;
    position: relative;
    text-align: center;
	height:90vh;
	
	@media ${Phone_Landscape}{
		height:100vh;
      	background-color:black;
	}
`;