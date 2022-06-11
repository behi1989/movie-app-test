import React from 'react';
import CalenderIcon from '../../Assets/Images/Calendar_icon.svg';
import Image1 from '../../Assets/Images/1.png';
import './MovieCardItem.scss';

const MovieCardItem = (props) => {
  return (
    <div className="movieCards">
      <div className="movieCardItem">
        <div className="movieCardImageFigure">
          <img src={Image1} alt="ImageOne" className="movieCardImage" />
        </div>
        <div className="movieCardContent">
          <p className="movieCardTitle">Movie One from Marvel studio every fraiday</p>
          <div className="movieCardDate">
            <img src={CalenderIcon} alt="CalenderIcon" className="dateIcon" />
            <p className="createdDate">2014-12-25</p>
          </div>
          <div className="movieCardGenre">
            <p className="genreItem">Action</p>
            <p className="genreItem">Drama</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieCardItem);
