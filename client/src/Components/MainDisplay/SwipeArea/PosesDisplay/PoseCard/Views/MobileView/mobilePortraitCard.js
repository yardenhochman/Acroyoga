import React from 'react';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import LoadDisplay from '../../../../../../UI/Loader/loader';
import Heart from "../../cardParts/heart";

const Portrait = ({ cardDetails: { pose: { img, name, id }, isClose, subtitle } }) => {
  const imageStyle = {
    maxHeight: '60vh',
    width: 'auto',
    maxWidth: '100vw',
    borderRadius: '5px',
    minWidth: 'auto',
  };
  const titleStyle = {
    height: '8vh',
    marginTop: '6vh',
    color: 'black',
    fontFamily: 'Special Elite',
  };
  const subStyle = {
    color: 'black',
    marginTop: '1vh',
  };
  let cardStyle = {
    height: '95vh',
    marginTop: '60%',
  };
  cardStyle = {};
  const cardDetails = { 
    display: "grid", 
    gridTemplateColumns: "5vw auto 5vw", 
    gridTemplateRows: "20% auto", 
    gridTemplateArea: `'heart | text | .|''.|text|.'` 
  };
  const displayCard = <div style={cardStyle}>
      <div>
        <VisibilitySensor>
          <Img src={img} style={imageStyle} alt={'to be added'} loader={LoadDisplay} />
        </VisibilitySensor>
      </div>
      <div style={cardDetails}>
        <Heart key={id + 'heart'} poseID={id} />
        <div>
          <h1 style={titleStyle}>{name}</h1>
          <p style={subStyle}>{subtitle}</p>
        </div>
      </div>
    </div>;
  return isClose ? displayCard : <div />
};

export default Portrait;
