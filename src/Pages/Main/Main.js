import React from 'react';
import MovieCardItem from '../../Components/MovieCardItem/MovieCardItem';
import './Main.scss';

const Main = (props) => {
  return (
    <div className="mainPage">
      <div className="searchBox"></div>
      <div className="movieCards">
        <MovieCardItem />
      </div>
    </div>
  );
};

export default React.memo(Main);
