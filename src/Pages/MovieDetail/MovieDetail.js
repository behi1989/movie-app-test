import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Config } from '../../Config';
import MovieDetailHeader from '../../Components/MovieDetailHeader/MovieDetailHeader';
import MovieDetailContent from '../../Components/MovieDetailContent/MovieDetailContent';

const MovieDetail = (props) => {
  // Define navigate
  const navigate = useNavigate();

  // Define params
  const params = useLocation();

  // Define movieId | Get from useLocation hook
  const movieId = params?.state?.movieId;

  // Define states
  const [movieDetail, setMovieDetail] = useState({});
  const [movieCredits, setMovieCredits] = useState({});

  // Constructor | Intial data
  useEffect(() => {
    Config.pageUp();
    getMovieDetail();
    getMovieCredits();
  }, []);

  // Fetch movie details data from api.themoviedb.org
  const getMovieDetail = async () => {
    // Define FetchData in config file
    let result = await Config.FetchData('GET', `movie/${movieId}?api_key=${Config.apiKey}`, null, null);
    if (result) {
      setMovieDetail(result);
    } else {
      navigate(-1);
    }
  };

  // Fetch movie credits data from api.themoviedb.org
  const getMovieCredits = async () => {
    // Define FetchData in config file
    let result = await Config.FetchData('GET', `movie/${movieId}/credits?api_key=${Config.apiKey}`, null, null);
    if (result) {
      setMovieCredits(result);
    }
  };

  // Go back to Previous page
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <MovieDetailHeader title={movieDetail?.title} tagLine={movieDetail?.tagline} goBack={() => goBack()} />
      <MovieDetailContent data={movieDetail} credits={movieCredits} />
    </div>
  );
};

export default React.memo(MovieDetail);
