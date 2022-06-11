import React from 'react';
import Cover1 from '../../Assets/Images/Cover1.png';
import './MovieDetailContent.scss';

const MovieDetailContent = (props) => {
  return (
    <div className="movieDetailContent">
      <div className="contents">
        <div className="contentFigureImage">
          <img src={Cover1} alt="Cover1" className="contentImage" />
        </div>
        <div className="contentDetails">
          <div className="detailItem">
            <span className="key">Budget</span>
            <span className="value">$170'000'000</span>
          </div>
          <div className="detailItem">
            <span className="key">Revenue</span>
            <span className="value">$772'776'600</span>
          </div>
        </div>
      </div>
      <p className="description">
        Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser. Light
        years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser. Light years
        from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.
      </p>
      <div className="credits">
        <p className="title">Credit: </p>
        <span className="creditItem">Zoe Saldanna, Vin Diesel</span>
      </div>
    </div>
  );
};

export default MovieDetailContent;
