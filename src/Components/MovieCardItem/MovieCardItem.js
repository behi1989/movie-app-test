import React from 'react';
import { Config } from '../../Config';
import CalenderIcon from '../../Assets/Images/Calendar_icon.svg';
import CommingSoon from '../../Assets/Images/coming-soon-1.jpg';
import './MovieCardItem.scss';

const MovieCardItem = (props) => {
  // Define props
  const { data, genre, showDetail } = props;

  // Movie genre handler | Return match genre props with movie genre Items
  const GetMovieGenres = (genres) => {
    if (genre) {
      let genreList = [];
      for (let i = 0; i < genres.length; i++) {
        genreList.push(
          <p key={genres[i]} className="genreItem">
            {genre.filter((genre) => genre.id === genres[i])[0]?.name}
          </p>
        );
      }
      return genreList;
    }
  };

  return (
    <div className="movieCards">
      {data?.length > 0 &&
        data?.map((movie) => {
          return (
            <div key={movie?.id} className="movieCardItem">
              <div className="movieCardImageFigure" onClick={() => showDetail(movie?.id)}>
                {movie?.poster_path !== null ? (
                  <img src={Config.imagePath + '/original/' + movie?.poster_path} alt={movie?.title} className="movieCardImage" />
                ) : (
                  <img src={CommingSoon} alt={movie?.title} className="movieCardImage" />
                )}
              </div>
              <div className="movieCardContent">
                <p className="movieCardTitle" onClick={() => showDetail(movie?.id)}>
                  {movie?.title}
                </p>
                <div className="movieCardDate">
                  <img src={CalenderIcon} alt="CalenderIcon" className="dateIcon" />
                  <p className="createdDate">{movie?.release_date}</p>
                </div>
                <div className="movieCardGenre">{GetMovieGenres(movie?.genre_ids)}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(MovieCardItem);
