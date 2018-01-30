import React, { Fragment } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Img from 'react-image';
import loader from '../loader';

const MobileCardLandscape = (
  { img, name },
  closeToCurrentView,
  subtitle
) => {

  let imageStyle = {
    height: '95vh',
    width: 'auto',
    borderRadius: '5px',
  };
  const overlayStyle = {
    background: 'rgba(0, 0, 0, 0.35) none repeat scroll 0% 0%',
    textAlign: 'left',
  };
  const titleStyle = {
    fontSize: '4vh',
    fontFamily: 'Special Elite',
  };

  const displayCard = (
    <Fragment>
      <CardMedia
        overlayContentStyle={overlayStyle}
        overlay={<CardTitle title={name} titleStyle={titleStyle} subtitle={subtitle} />}
      >
        <Img src={img} style={imageStyle} alt={'to be added'} loader={loader} />
      </CardMedia>
    </Fragment>
  );
  return closeToCurrentView ? displayCard : <div />;
};
export default MobileCardLandscape;
