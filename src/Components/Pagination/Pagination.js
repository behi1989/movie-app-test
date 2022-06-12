import React from 'react';
import './Pagination.scss';

const Pagination = (props) => {
  // Define props
  const { next, prev, status } = props;

  return (
    <div className="pagination">
      <div className="paginate">
        <span className="prev" onClick={prev}>
          Previous Page
        </span>
        <span className="seprator"></span>
        <span className="next" onClick={next}>
          Next Page
        </span>
      </div>
      <p className="paginationStatus">Showing result: {status}</p>
    </div>
  );
};

export default Pagination;
