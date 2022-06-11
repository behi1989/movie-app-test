import React from 'react';
import './Pagination.scss';

const Pagination = (props) => {
  return (
    <div className="pagination">
      <div className="paginate">
        <span className="prev">Previous Page</span>
        <span className="seprator"></span>
        <span className="next">Next Page</span>
      </div>
      <p className="paginationStatus">Showing result: 1 - 20</p>
    </div>
  );
};

export default Pagination;
