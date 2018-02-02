import React, { Component } from 'react';
import Media from 'react-media';

import Navigation from './Navigation/navigation';
import SwipeArea from './SwipeArea/swipeArea';

class MainDisplay extends Component {
  next = () => this.reactSwipe.next();
  prev = () => this.reactSwipe.prev();
  resetSlide = () => this.reactSwipe.slide(1, 1000);
  getPos = () => this.reactSwipe.getPos(1);
  render = () => {
    return (
      <div className="poses-container">
        <div className="carousel-container">
          <SwipeArea reactSwipe={reactSwipe => (this.reactSwipe = reactSwipe)} resetSlide={this.resetSlide} getPose={this.getPos} />
          <Media query={{ minWidth: 1000 }}>
            {matches =>
              matches && (
                <div>
                  <Navigation next={this.next} prev={this.prev} />
                </div>
              )
            }
          </Media>
        </div>
      </div>
    );
  };
}

export default MainDisplay;