import React from 'react';
import { Config } from '../../Config';
import CommingSoon from '../../Assets/Images/coming-soon-1.jpg';
import './MovieDetailContent.scss';

// Define DetaiItem Component with keys, values and link props
const DetailItem = ({ keys, values, link }) => {
  return (
    <div className="detailItem">
      <span className="key">{keys}</span>
      {link ? (
        <span className="value link" onClick={() => window.open(values.includes('https') ? values : `https://www.imdb.com/title/${values}`, '_blank')}>
          link
        </span>
      ) : (
        <span className="value">{values}</span>
      )}
    </div>
  );
};

const MovieDetailContent = (props) => {
  // Define props
  const { data, credits } = props;

  return (
    <div className="movieDetailContent">
      <div className="contents">
        <div className="contentFigureImage">
          {data?.poster_path !== null ? (
            <img src={Config.imagePath + '/original/' + data?.poster_path} alt={data?.title} className="contentImage" />
          ) : (
            <img src={CommingSoon} alt={data?.title} className="contentImage" />
          )}
        </div>
        <div className="contentDetails">
          <DetailItem keys="Budget" values={`$${Config.separate(data?.budget)}`} />
          <DetailItem keys="Revenue" values={`$${Config.separate(data?.revenue)}`} />
          <DetailItem keys="Release Date" values={data?.release_date} />
          <DetailItem keys="Runtime" values={data?.runtime} />
          <DetailItem keys="Score" values={`${data?.vote_average} (${data?.vote_count} votes)`} />
          <DetailItem keys="Genres" values={data?.genres?.map((genre, i, { length }) => genre.name + (length > i + 1 ? ', ' : ''))} />
          <DetailItem keys="IMDB Link" values={data?.imdb_id} link />
          <DetailItem keys="Homepage Link" values={data?.homepage} link />
        </div>
      </div>
      <p className="description">{data?.overview}</p>
      <div className="credits">
        <p className="title">Credit: </p>
        <span className="creditItem">
          {credits?.cast?.splice(0, 10).map((credit, i, { length }) => credit.name + (length > i + 1 ? ', ' : ''))}
          {credits?.cast?.length > 10 && `and ${credits?.cast?.length - 10} more.`}
        </span>
      </div>
    </div>
  );
};

export default MovieDetailContent;
