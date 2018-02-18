import React from 'react';
import Radium from '../../../ConfiguredRadium';
import { StyleRoot } from 'radium';
import styler from 'react-styling';
import {
  Desktop,
  Phone_Landscape,
  Phone_Portrait,
  Orange,
} from '../../../DeviceRules';

const Credit = ({ person: { name, img, text, profileSite } }) => (
  <StyleRoot style={style.credit}>
    <img style={style.image} src={img} alt={`loading...`}/>
    <div style={style.text_box}>
      <h2 style={style.title}>
        <a style={style.site_link} href={profileSite}>{name}</a>
      </h2>
      <p style={style.credit_text}>{text}</p>
    </div>
  </StyleRoot>
);

export default Radium(Credit);

var style = styler`
  credit 
    display: grid
    height: 20vh
    width: 70vw
    grid-template-columns: 1fr auto 1fr 6fr
    grid-template-areas: ". img . textbox"
    margin: 2vh 0
    @media ${Phone_Portrait}
      width: 100%;
      display:flex;
      height:25vh;
      margin: 0 0 6vh 0;
      padding: 0 5px;
    @media ${Phone_Landscape}
      display: flex;
      height:80%;
      margin: 0 0 1vh 0;
  image
    @media ${Desktop}
      grid-area: img
      height: 100%
      width: 220px
      border-radius: 5px
    @media ${Phone_Portrait}
      width: 40vw
      height: auto
      margin-top: 5vh
    @media ${Phone_Landscape}
      height: 100%;
      width: 158px;
  text_box
    grid-area: textbox
    display: flex
    flex-direction: column
    justify-content: space-around
    padding: 1vh
    @media ${Phone_Portrait}
      margin-left: 20px;
    @media ${Phone_Landscape}
      margin-left: 8vw;
  credit_text
    grid-area: text;
    flex-grow: 1;
    margin: 3vh 0;
    font-size: 1.5vh;
    font-family: Roboto Condensed;
    @media ${Phone_Portrait}
      margin: 1vh 0;
      font-size: 0.8rem
    @media ${Phone_Landscape}
      font-size:3vh;
  title
    @media ${Phone_Portrait}
      font-size: 1.5rem
  site_link
    color: ${Orange}
  

  
`;