import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import Credit from './credits';

const AboutUs = () => {
  const yarden = { name: 'Yarden Hochman', img: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1518158450/16832212_1326016857444631_3977183095561215084_n_osizmh.jpg', profileSite: 'https://polar-tundra-13345.herokuapp.com/', text: 'Yarden is a Full Stack Engineer currently looking for opportunities in Colorado or California. His favorite fruit is Mango.' };
  const Anatoliy = {
    name: 'Anatoliy Zaslavskiy', img: 'http://res.cloudinary.com/dz2nxhscn/image/upload/v1518127206/20046539_10156211418873265_263186605151505675_n_ah72ly.jpg', profileSite: 'https://www.linkedin.com/in/tolicodes', text: 'Toli is a frontend programmer working at Hover Inc in SF, California. He loves everything active including acro yoga, hiking, jogging, skiing, and PsyTrance parties.'
  };
  const linkStyle = {
    padding: '0px',
    color: 'black'
  }
  const aboutPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    
  };
  const titleStyle = {
    textAlign: 'center',
      height: '20vh',
      paddingTop:'10vh',
      
  }
const aboutUsStyle = {
  fontFamily: 'Special Elite',
};

  return <div style={aboutPageStyle} className="about_page">
      <Link style={linkStyle} to="/">
        <Icon name="reply" size="big" />
      </Link>
      <div style={titleStyle} className="about_page_title">
        <h1 style={aboutUsStyle} className="about_title">About Us</h1>
      </div>
      <div className="about_page_participants">
        <Credit person={yarden} />
        <Credit person={Anatoliy} />
      </div>
    </div>;
};

export default AboutUs;