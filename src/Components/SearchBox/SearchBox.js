import React, { useState } from 'react';
import DatePicker, { DateObject, getAllDatesInRange } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import './SearchBox.scss';

const SearchBox = (props) => {
  // Define props
  const { submit } = props;

  // Define states
  const [dates, setDates] = useState([]);
  const [allDates, setAllDates] = useState([]);

  return (
    <div className="searchBox">
      <label className="searchBoxInput">
        Search by release date:
        <DatePicker
          range
          placeholder="Pick a date or date range"
          minDate={new DateObject().toFirstOfMonth()}
          maxDate={new DateObject().toLastOfMonth()}
          value={dates}
          onChange={(date) => {
            setDates(date);
            setAllDates(getAllDatesInRange(date));
          }}
          plugins={[<DatePanel eachDaysInRange />]}
        />
      </label>
      <button className="btnApplyDateSearch" onClick={() => submit(allDates)}>
        Search
      </button>
    </div>
  );
};

export default React.memo(SearchBox);
