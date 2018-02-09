import React from 'react';

const Credit = ({ person: { name, img, text, profileSite } }) => (
  <div className="credit">
    <img className="credit_image" src={img} />

    <div className="text_box">
      <h2 className="credit_title">
        <a href={profileSite}>{name}</a>
      </h2>
      <p className="credit_text">{text}</p>
    </div>
  </div>
);

export default Credit;