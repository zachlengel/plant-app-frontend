import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { useState } from "react";

export function ScheduleShow(props) {
  const [date, setDate] = useState(new Date());

  const handleSubmitSchedule = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSchedule(props.schedule.id, params, () => event.target.reset());
    window.location.href = "/schedules";
  };

  const handleClick = () => {
    props.onDestroySchedule(props.schedule.id);
  };

  return (
    <div>
      <div className="show">
        <h1>Schedule Info</h1>
        <p>
          Your {props.schedule.plant.name} needs {props.schedule.plant.amount_of_sun} hours of sun a day and watered{" "}
          {props.schedule.plant.days_to_water} days a week.
        </p>
        <p>It will be time to water on {moment(props.schedule.watering_start_date).format(`MMMM Do, YYYY`)}.</p>
      </div>
      <div className="update-schedule">
        <form onSubmit={handleSubmitSchedule}>
          <div>
            New Watering Date:{" "}
            <DatePicker
              dateFormat={"yyyy/MM/dd"}
              name="watering_start_date"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
          <button className="button-33" type="submit">
            Update Schedule
          </button>
          <button className="button-33" onClick={handleClick}>
            Delete Schedule
          </button>
        </form>
      </div>
    </div>
  );
}
