import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import './SearchBox.scss';

const SearchBox = (props) => {
  const [dateValues, setDateValues] = useState([]);
  return (
    <div className="searchBox">
      <label className="searchBoxInput">
        Search by release date:
        <DatePicker range value={dateValues} onChange={setDateValues} plugins={[<DatePanel />]} />
      </label>
      <button className="btnApplyDateSearch">Search</button>
    </div>
  );
};

export default React.memo(SearchBox);
