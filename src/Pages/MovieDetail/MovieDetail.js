import React from 'react';
import MovieDetailHeader from '../../Components/MovieDetailHeader/MovieDetailHeader';
import MovieDetailContent from '../../Components/MovieDetailContent/MovieDetailContent';

const MovieDetail = (props) => {
  return (
    <div className="container">
      <MovieDetailHeader />
      <MovieDetailContent />
    </div>
  );
};

export default React.memo(MovieDetail);
