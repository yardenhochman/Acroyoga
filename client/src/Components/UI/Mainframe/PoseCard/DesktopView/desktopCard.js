import React, { Fragment } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Img from 'react-image';
import loader from '../loader';

const DesktopCard = (
  { img, name },
  closeToCurrentView,
  heart,
  subtitle,
) => {
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
        <Img src={img} style={imageStyle} alt={'to be added'} loader={loader} />
      </CardMedia>
      <div style={cardInfoStyle}>
        {heart}
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
  return closeToCurrentView ? displayCard : <div />;
};
export default DesktopCard;
