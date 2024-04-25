import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

export function ScheduleNew(props) {
  // Datepicker variables
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSchedule(params, () => event.target.reset());
    window.location.href = "/plants";
  };

  return (
    <div className="new-schedule">
      <h1>Create a Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Plant ID: <input name="plant_id" type="text" />
        </div>
        <div>
          Watering Date:{" "}
          <DatePicker
            dateFormat={"yyyy/MM/dd"}
            name="watering_start_date"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <button className="button-33" type="submit">
          Add To Schedule
        </button>
      </form>
    </div>
  );
}
