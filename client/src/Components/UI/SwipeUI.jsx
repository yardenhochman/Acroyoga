import React from 'react';
import ReactSwipe from 'react-swipe';

const SwipeUI = ({ key, reactSwipe, updater, children }) => (
	<ReactSwipe
		ref={reactSwipe}
		swipeOptions={{
			continuous: true,
			transitionEnd: (index, elem) => updater(index),
		}}
		key={key}
	>
		{children}
	</ReactSwipe>
);

export default SwipeUI;
