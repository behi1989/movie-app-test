import React, { useState } from 'react';
import BackIcon from '../../Assets/Images/back_icon.svg';
import './MovieDetailHeader.scss';

const MovieDetailHeader = (props) => {
  // Define props
  const { title, tagLine, goBack } = props;

  return (
    <div className="movieDetailHeader">
      <button className="btnBackToMain" onClick={goBack}>
        <img src={BackIcon} alt="backIcon" className="backIcon" /> Back
      </button>
      <div className="movieDetailTitles">
        <p className="movieTitle">{title}</p>
        <p className="movieShortDescription">{tagLine}</p>
      </div>
    </div>
  );
};

export default React.memo(MovieDetailHeader);
