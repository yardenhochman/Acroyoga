import React from 'react';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import loader from '../../../../../../UI/Loader/loader';
import Heart from '../../cardParts/heart';

const PC = ({ cardDetails: { pose: { img, name, id }, isClose, subtitle } }) => {
  const imageStyle = {
    height: '50vw',
    maxHeight: '70vh',
    width: 'auto',
    borderRadius: '5px',
  };
  const titleStyle = {
    gridArea: 'title',
    //height: '7vh',
    marginTop: '2vh',
    color: 'black',
    fontFamily: 'Special Elite',
  };
  const textAreaStyle = {
    gridArea: 'textArea',
    gridRow: '2',
    gridColumn: '2',
  };
  const subStyle = {
    gridArea: 'sub',
    fontSize: '2vh',
    color: 'black',
    marginBottom: '0',
    fontFamily: 'Roboto Condensed',
  };
  const cardDetails = { display: "grid", gridTemplateColumns: "5vw auto 5vw", gridTemplateRows: "20% auto", 
  gridTemplateArea: `'. | text | .|''heart|text|.'` };
  const displayCard = <div>
      <div>
        <VisibilitySensor>
          <Img src={img} style={imageStyle} alt={"to be added!"} loader={loader} />
        </VisibilitySensor>
      </div>
      <div style={cardDetails}>
        <Heart key={id + "heart"} poseID={id} />
        <div style={textAreaStyle}>
          <h1 style={titleStyle}>{name}</h1>
          <p style={subStyle}>{subtitle}</p>
        </div>
      </div>
    </div>;
  return isClose ? displayCard : <div />
};
export default PC;

  /* <CardMedia>
        <VisibilitySensor>
          <Img src={img} style={imageStyle} alt={'to be added!'} loader={loader} />
        </VisibilitySensor>
      </CardMedia>
      <div style={cardInfoStyle}>
        <Heart key={id + 'heart'} poseID={id} />
        <CardTitle
          style={textAreaStyle}
          title={name}
          titleStyle={titleStyle}
          subtitleStyle={subStyle}
          subtitle={subtitle}
        />
      </div> */
