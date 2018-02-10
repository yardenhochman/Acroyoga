import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { StyleRoot } from 'radium';
import Radium from '../../../ConfiguredRadium'
import Media from 'react-media';
import styler from 'react-styling';

import Credit from './credits';

const AboutUs = () => (
  <StyleRoot style={style.about_page}>
    <StyleRoot><div className="about_page_title">
      <h1 style={style.title}>About Us</h1>
    </div></StyleRoot>
    <StyleRoot style={style.participants}>
      <Credit person={yarden} />
      <Credit person={Anatoliy} />
    </StyleRoot>
    <div style={style.back_button} className="back_button">
      <Link to="/">
        <Icon color="green" name="reply" size="huge" />
      </Link>
    </div>
  </StyleRoot>
);


export default Radium(AboutUs);


var Phone_Landscape = '@media (min-width: 420px) and (max-width: 1000px)';
var Phone_Portrait = '@media (max-width: 420px)';
var style = styler`
  about_page
    display: flex
    flex-direction: column
    height: 80vh
    ${Phone_Landscape}
      height: 100vh;
  participants
    height: 70vh
    padding: 10vw
    padding-top:0
    ${Phone_Portrait}
      padding: 0 5px
      height: 70vh
    ${Phone_Landscape}
      height: 80%;
      padding:0;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
  title
    font-family: Special Elite;
    text-align: center
    height: 20vh
    padding-top:10vh
    ${Phone_Landscape}
      margin-top:1vh;
      text-align: center;
      padding-top: 3vh;
      padding-bottom: 0;
  back_button
    paddingLeft: 90vw
`;



var yarden = {
  name: 'Yarden Hochman',
  img:
    'http://res.cloudinary.com/dz2nxhscn/image/upload/v1518158450/16832212_1326016857444631_3977183095561215084_n_osizmh.jpg',
  profileSite: 'https://polar-tundra-13345.herokuapp.com/',
  text:
    'Yarden is a Full Stack Engineer currently looking for opportunities in Colorado or California. His favorite fruit is Mango.',
};
var Anatoliy = {
  name: 'Anatoliy Zaslavskiy',
  img:
    'http://res.cloudinary.com/dz2nxhscn/image/upload/v1518127206/20046539_10156211418873265_263186605151505675_n_ah72ly.jpg',
  profileSite: 'https://www.linkedin.com/in/tolicodes',
  text:
    'Toli is a frontend programmer working at Hover Inc in SF, California. He loves everything active including acro yoga, hiking, jogging, skiing, and PsyTrance parties.',
};