import React from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import loader from '../../../../../../UI/Loader/loader';

const Portrait = ({ cardDetails: { pose: { img, name }, isClose, subtitle } }) => {
  const imageStyle = {
    height: '70vw',
    width: 'auto',
    maxWidth: '55vh',
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
  const cardStyle = {
    height: '95vh',
    marginTop: '60%',
  };
  const displayCard = (
    <div style={cardStyle}>
      <CardMedia>
        <VisibilitySensor>
          <Img src={img} style={imageStyle} alt={'to be added'} loader={loader} />
        </VisibilitySensor>
      </CardMedia>
      <CardTitle title={name} titleStyle={titleStyle} subtitleStyle={subStyle} subtitle={subtitle} />
    </div>
  );
  return isClose ? displayCard : <div />;
};

export default Portrait;
