import React, { useEffect, useState } from 'react';
import { Config } from '../../Config';
import { useNavigate, useParams } from 'react-router-dom';
import MovieCardItem from '../../Components/MovieCardItem/MovieCardItem';
import Pagination from '../../Components/Pagination/Pagination';
import SearchBox from '../../Components/SearchBox/SearchBox';

const Main = (props) => {
  // Define navigate
  const navigate = useNavigate();
  const params = useParams();

  // Define states
  const [allMovieData, setAllMovieData] = useState([]);
  const [allMovieGenre, setAllMovieGenre] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(params?.page) || 1);
  const [totalPage, setTotalPage] = useState();
  const [pageStatus, setPageStatus] = useState(params?.page ? `${params?.page}-${params.page * 20}` : '1-20');
  const [dateFilter, setDateFilter] = useState({ startDate: '', endDate: '' });

  // Constructor | Initial data
  useEffect(() => {
    // Goto top of page every time
    Config.pageUp();
    getAllMovieList();
    getAllMovieGenre();
  }, [currentPage]);

  // Fetch all movies data from api.themoviedb.org
  const getAllMovieList = async () => {
    // Define FetchData in config file
    let result = await Config.FetchData(
      'GET',
      `discover/movie?api_key=${Config.apiKey}&page=${currentPage}&release_date.gte=${dateFilter.startDate ?? ''}&release_date.lte=${dateFilter.endDate ?? ''}`,
      null,
      null
    );
    if (result) {
      setTotalPage(result?.total_pages);
      setAllMovieData(result?.results);
    }
  };

  // Fetch all movies genre data from api.themoviedb.org
  const getAllMovieGenre = async () => {
    // Define FetchData in config file
    let result = await Config.FetchData('GET', `genre/movie/list?api_key=${Config.apiKey}`, null, null);
    if (result) {
      setAllMovieGenre(result?.genres);
    }
  };

  // Pagination next button | update currentPage, pageStatus states
  const nextPage = () => {
    if (currentPage + 1 <= totalPage) {
      navigate(`/movies/${currentPage + 1}`);
      setCurrentPage(currentPage + 1);
      setPageStatus(`${currentPage + 1}-${(currentPage + 1) * 20}`);
    }
  };

  // Pagination prev button | update currentPage, pageStatus states
  const prevPage = () => {
    if (currentPage > 1) {
      navigate(`/movies/${currentPage - 1}`);
      setCurrentPage(currentPage - 1);
      setPageStatus(`${currentPage - 1}-${(currentPage - 1) * 20}`);
    }
  };

  // Goto movie single page | Show movie details by page id
  const showPageDetail = (movieId) => {
    navigate(`/movie/${movieId}`, { state: { movieId: movieId, name: 'Behi' } });
  };

  // Submit search button with date range
  const searchSubmit = async (dateRange) => {
    let releaseStartDate;
    let releaseEndDate;
    dateRange.map((date, index, { length }) => {
      if (index === 0) releaseStartDate = new Date(date).toISOString().slice(0, 10);
      if (length >= index + 1) releaseEndDate = new Date(date).toISOString().slice(0, 10);
    });
    setDateFilter({ startDate: releaseStartDate, endDate: releaseEndDate });

    // Define FetchData in config file
    let result = await Config.FetchData(
      'GET',
      `discover/movie?api_key=${Config.apiKey}&page=${currentPage}&release_date.gte=${releaseStartDate}&release_date.lte=${releaseEndDate}`,
      null,
      null
    );
    if (result) {
      setTotalPage(result?.total_pages);
      setAllMovieData(result?.results);
    }
  };

  return (
    <div className="container">
      <SearchBox submit={searchSubmit} />
      <MovieCardItem data={allMovieData} genre={allMovieGenre} showDetail={showPageDetail} />
      <Pagination next={nextPage} prev={prevPage} status={pageStatus} />
    </div>
  );
};

export default React.memo(Main);
