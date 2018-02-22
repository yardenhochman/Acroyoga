import React from 'react';
import { connect } from 'react-redux';
import PoseCard from './PoseCard';
import { checks } from './helpers';

const PosesFilter = ({ lists, difficultySetting, tag, poses, currentSlide }) =>
	poses
		.filter(pose => checks(pose, tag, lists, difficultySetting))
		.map((pose, cardIndex, filteredPoses) => (
			<PoseCard
				key={cardIndex + pose.name}
				pose={pose}
				cardIndex={cardIndex}
				filteredPoses={filteredPoses}
				difficultySetting={difficultySetting}
				currentSlide={currentSlide}
			/>
		));

const mapStateToProps = ({
	pose: { poses },
	view: { tag, difficulty, currentSlide },
	user: { lists, id },
}) => ({ poses, tag, lists, difficultySetting: difficulty, currentSlide });

export default connect(mapStateToProps)(PosesFilter);
