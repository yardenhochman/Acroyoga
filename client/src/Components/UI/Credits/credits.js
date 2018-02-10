import React from 'react';
import LoadDisplay from '../Loader/loader';
import Img from 'react-image';


const Credit = ({ person: { name, img, text, profileSite } }) => (
  <div className="credit">
    <Img className="credit_image" src={img} loader={LoadDisplay} />

    <div className="text_box">
      <h2 className="credit_title">
        <a href={profileSite}>{name}</a>
      </h2>
      <p className="credit_text">{text}</p>
    </div>
  </div>
);

export default Credit;