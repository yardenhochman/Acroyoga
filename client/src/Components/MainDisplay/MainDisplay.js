import React, { Component } from 'react';
import Media from 'react-media';

import Navigation from '../UI/Navigation/navigation';
import SwipeArea from './SwipeArea/swipeArea';
import { Desktop,  } from '../../device_rules';

class MainDisplay extends Component {
  next = () => this.reactSwipe.next();
  prev = () => this.reactSwipe.prev();
  resetSlide = () => this.reactSwipe&&this.reactSwipe.slide(1, 1000);
  getPos = () => this.reactSwipe.getPos(1);
  render = () => (
    <div style={style.main} className="poses-container">
      <div className="carousel-container">
        <SwipeArea
          reactSwipe={reactSwipe => (this.reactSwipe = reactSwipe)}
          resetSlide={this.resetSlide}
          getPose={this.getPos}
        />
        <Media query={`${Desktop}`}>
          <div>
            <Navigation
              next={this.next}
              prev={this.prev}
            />
          </div>
        </Media>
      </div>
    </div>
  );
}

export default MainDisplay;

var style = {
  main: {
    height: '92vh',
  },
};