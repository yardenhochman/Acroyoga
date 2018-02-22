import React from 'react';
import ReactDOM from 'react-dom';
import PoseLoader from './PoseLoader';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<PoseLoader />, div);
});
