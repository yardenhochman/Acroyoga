import React from 'react';
import { Icon } from 'semantic-ui-react';

const Heart = ({ isFavorite, poseID, userID, remove, add }) => (
	<div
		style={style.clickableArea}
		onClick={
			isFavorite ? () => remove(poseID, userID) : () => add(poseID, userID)
		}
	>
		<Icon.Group style={style.heartStyle}>
			<Icon name={isFavorite ? `heart` : `empty heart`} color="red" />
		</Icon.Group>
	</div>
);

export default Heart;

var style = {
	clickableArea: {
		display: 'flex',
		width: '70px',
		height: '70px',
		paddingLeft: '10px',
	},
	heartStyle: {
		display: 'flex',
		width: '45px',
		height: '45px',
		cursor: 'pointer',
		fontSize: `3em`,
	},
};
