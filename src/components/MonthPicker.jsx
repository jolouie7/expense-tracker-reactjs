import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";

import {loadDate} from "../actions/dateActions"

const MonthPicker = ({loadDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate.getMonth() + 1)
  // console.log(startDate.getFullYear())
  const handleChange = async (date) => {
    setStartDate(date);
    // console.log(startDate.getMonth() + 1)
    // console.log(startDate.getFullYear())
    loadDate(date.getMonth() + 1, date.getFullYear());
  }
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleChange(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loadDate: (month, year) => {dispatch(loadDate(month, year));}
})

export default connect(null, mapDispatchToProps)(MonthPicker)
