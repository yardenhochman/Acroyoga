import React, { Component } from 'react';

export default class MainPage extends Component {
  state = {
    user: {}
  };
  componentDidMount = () => {
    const { user } = this.state;
    if (user) {
      return this.findPic();
    }
  };
  findPic = () => {
    console.log(
      'findpic(app): code here will find a pose to display'
    );
  };
  render() {
    return (
      <div className="App">
        <Main_frame
          pose={Selectedpose || randomPose}
        />
{/*         <Top_bar />
        <Right_bar />
        <Left_bar />
        <Buttom_bar /> */}
      </div>
    );
  }
}
/* 
on the opening page

mainframe - load random picture / load the right picture
  allow easy swapping to more poses


sidebar 1: 
  -log in, 
  -favorites, other lists
  -match poses with

sidebar 2:
  -rate pose/sequence
  -find similar
  -


  -warm up



*/
