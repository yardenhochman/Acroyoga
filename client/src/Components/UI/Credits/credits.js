import React from 'react';
import LoadDisplay from '../Loader/loader';
import Img from 'react-image';
import Radium from '../../../ConfiguredRadium';
import { StyleRoot } from 'radium';
import styler from 'react-styling';

const Credit = ({ person: { name, img, text, profileSite } }) => (
  <StyleRoot style={style.credit}>
    <Img style={style.image} src={img} loader={LoadDisplay} />

    <div style={style.text_box}>
      <h2 style={style.title}>
        <a href={profileSite}>{name}</a>
      </h2>
      <p style={style.credit_text}>{text}</p>
    </div>
  </StyleRoot>
);

export default Radium(Credit);

const Phone_Portrait = '@media (max-width: 420px)';
var Phone_Landscape = '@media (min-width: 420px) and (max-width: 1000px)';

var style = styler`
  credit 
    display: grid
    height: 20vh
    width: 70vw
    grid-template-columns: 1fr auto 1fr 6fr
    grid-template-areas: ". img . textbox"
    margin: 2vh 0
    ${Phone_Portrait}
      width: 100%;
      display:flex;
      height:25vh;
      margin: 0 0 6vh 0;
      padding: 0 5px;
    ${Phone_Landscape}
      display: flex;
      height:80%;
      margin: 0 0 1vh 0;
  image
    grid-area: img
    height: 100%
    width: 220px
    border-radius: 5px
    ${Phone_Portrait}
      width:30%
    ${Phone_Landscape}
      height: 100%;
      width: 158px;
  text_box
    grid-area: textbox
    display: flex
    flex-direction: column
    justify-content: space-around
    padding: 1vh
    ${Phone_Portrait}
      margin-left: 20px;
    ${Phone_Landscape}
      margin-left: 8vw;
  credit_text
    grid-area: text;
    flex-grow: 1;
    margin: 3vh 0;
    font-size: 1.5vh;
    font-family: Roboto Condensed;
    ${Phone_Portrait}
      margin: 1vh 0;
      font-size: 0.8rem
    ${Phone_Landscape}
      font-size:3vh;
  title
    ${Phone_Portrait}
      font-size: 1.5rem
  

  
`;