import React, { Fragment } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
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
    height: '7vh',
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
    color: 'black',
    marginBottom: '0',
    fontFamily: 'Roboto Condensed',
  };
  const cardInfoStyle = {
    display: 'grid',
    height: '15vh',
    gridTemplateColumns: '15% auto 15%',
    gridTemplateRows: '10% auto 10%',
  };
  const displayCard = (
    <Fragment>
      <CardMedia>
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
      </div>
    </Fragment>
  );
  return isClose ? displayCard : <div />;
};
export default PC;
