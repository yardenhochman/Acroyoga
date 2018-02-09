import React from 'react';

const creditStyle = {
  display: 'grid',
  height: '20vh',
  width: '70vw',
  gridTemplateColumns: '1fr auto 1fr 6fr',
  gridTemplateAreas: `". img . textbox"`,
  margin: '2vh 0',
  
}

const imageStyle = {
  gridArea: 'img',
      height:'100%',
      width:'230px'
}

const textBoxStyle = {
  gridArea: 'textbox',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '1vh',
}
const creditTextStyle = {
  gridArea: 'text',
  flexGrow: '1',
  margin: '3vh 0',
  fontSize: '1.5vh',
  fontFamily: 'Roboto Condensed',
};
const nameStyle = {
};

const Credit = ({ person: { name, img, text, profileSite } }) => (
  <div style={creditStyle} className="credit">
    <img style={imageStyle} className="credit_image" src={img} />

    <div style={textBoxStyle} className="text_box">
      <h2 style={nameStyle} className="credit_title">
        <a href={profileSite}>{name}</a>
      </h2>
      <p style={creditTextStyle} className="credit_text">{text}</p>
    </div>
  </div>
);

export default Credit;