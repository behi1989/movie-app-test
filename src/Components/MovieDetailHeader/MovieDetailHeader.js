import React, { useState } from 'react';
import BackIcon from '../../Assets/Images/back_icon.svg';
import './MovieDetailHeader.scss';

const MovieDetailHeader = (props) => {
  const [dateValues, setDateValues] = useState([]);
  return (
    <div className="movieDetailHeader">
      <button className="btnBackToMain">
        <img src={BackIcon} alt="backIcon" className="backIcon" /> Back
      </button>
      <div className="movieDetailTitles">
        <p className="movieTitle">Guardians of the Galaxy</p>
        <p className="movieShortDescription">All heroes start somewhere.</p>
      </div>
    </div>
  );
};

export default React.memo(MovieDetailHeader);
