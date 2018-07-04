import React from 'react';
import { Icon } from 'semantic-ui-react';
import Credit from './Credits';
import { Phone_Portrait, Phone_Landscape } from '../../../../DeviceRules';
import styled from 'styled-components'


const AboutUs = ({history}) => (
  <About_Page>
  <Back_Button className="back_button">
      <Styled_Icon
        name="reply"
        size="huge"
        onClick={() => window.history.back()}
      />
    </Back_Button>
      <div className="about_page_title">
        <Title>About Us</Title>
      </div>
    <Participants>
      <Credit person={yarden} />
      <Credit person={Anatoliy} />
    </Participants>
  </About_Page>
);


export default AboutUs;

const About_Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;

  @media ${Phone_Landscape}{
    height: 100vh;
  }
`;
const Participants = styled.div`
  height: 70vh;
  padding: 10vw;
  padding-top:0;
  @media ${Phone_Portrait}{
    padding: 0 3px;
    height: 70vh;
  }
  @media ${Phone_Landscape}{
    height: 80%;
    padding:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`
const Title = styled.h1`
  font-family: Special Elite;
  text-align: center;
  height: 20vh;
  padding-top:10vh;

  @media ${Phone_Landscape}{
    margin-top:1vh;
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 0;
  }
`;
const Back_Button = styled.div`
  paddingLeft: 80vw;
`;
const Styled_Icon = styled(Icon)`
  cursor: pointer;
`;

var yarden = {
  name: 'Yarden Hochman',
  img:
    'https://res.cloudinary.com/dz2nxhscn/image/upload/v1518158450/16832212_1326016857444631_3977183095561215084_n_osizmh.jpg',
  profileSite: 'https://yardenh.herokuapp.com/',
  text:
    'Yarden is a Full Stack Engineer currently looking for opportunities in Colorado or California. His favorite fruit is Mango.',
};
var Anatoliy = {
  name: 'Anatoliy Zaslavskiy',
  img:
    'https://res.cloudinary.com/dz2nxhscn/image/upload/v1518127206/20046539_10156211418873265_263186605151505675_n_ah72ly.jpg',
  profileSite: 'https://www.linkedin.com/in/tolicodes',
  text:
    'Toli is a frontend programmer working at Hover Inc in SF, California. He loves everything active including acro yoga, hiking, jogging, skiing, and PsyTrance parties.',
};