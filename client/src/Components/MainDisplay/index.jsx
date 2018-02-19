import React from 'react';
import Media from 'react-media';
import Navigation from '../UI/Navigation';
import SwipeArea from './SwipeArea';
import { Desktop } from '../../DeviceRules';

const MainDisplay = () => {
  let swipe = null;
  const next = () => swipe.next();
  const prev = () => swipe.prev();
  const resetSlide = () => swipe&&swipe.slide(1, 1000);
  const getPos = () => swipe.getPos(1);
  return (
    <div style={style.main} className="poses-container">
        <SwipeArea
          reactSwipe={reactSwipe => (swipe = reactSwipe)}
          resetSlide={resetSlide}
          getPose={getPos}
        />
        <Media query={`${Desktop}`}>
          <div>
            <Navigation
              next={next}
              prev={prev}
            />
          </div>
        </Media>
    </div>
  );
}

export default MainDisplay;

var style = {
  main: {
    height: '92vh',
  },
};