import React from 'react';
import MovieCardItem from '../../Components/MovieCardItem/MovieCardItem';
import Pagination from '../../Components/Pagination/Pagination';
import SearchBox from '../../Components/SearchBox/SearchBox';

const Main = (props) => {
  return (
    <div className="container">
      <SearchBox />
      <MovieCardItem />
      <Pagination />
    </div>
  );
};

export default React.memo(Main);
