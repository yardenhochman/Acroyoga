import React, { Fragment } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import loader from '../../../../../../UI/Loader/loader';

const Landscape = ({ cardDetails: { pose: { img, name }, isClose, subtitle } }) => {
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
        <VisibilitySensor>
          <Img src={img} style={imageStyle} alt={'to be added'} loader={loader} />
        </VisibilitySensor>
      </CardMedia>
    </Fragment>
  );
  return isClose ? displayCard : <div />;
};
export default Landscape;
