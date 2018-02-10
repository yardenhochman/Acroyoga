import React, { Fragment } from 'react';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import LoadDisplay from '../../../../../../UI/Loader/loader';
//import Heart from '../../cardParts/heart';

const Landscape = ({ cardDetails: { pose: { img, name, id }, isClose, subtitle } }) => {
  let imageStyle = {
    height: '100vh',
    width: 'auto',
    borderRadius: '5px',
  }
  const displayCard = <Fragment>
      <VisibilitySensor>
        <Img src={img} style={imageStyle} alt={'to be added'} loader={LoadDisplay} />
      </VisibilitySensor>
    </Fragment>;
  return isClose ? displayCard : <div />;
};
export default Landscape;
