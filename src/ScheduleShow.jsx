import React from "react";
import moment from "moment";

export function ScheduleShow(props) {
  return (
    <div className="show">
      <h1>Schedule information</h1>
      <p>
        Your {props.schedule.plant.name} needs {props.schedule.plant.amount_of_sun} hours of sun a day and watered{" "}
        {props.schedule.plant.days_to_water} days a week.
      </p>
      <p>It will be time to water on {moment(props.schedule.watering_start_date).format(`MMMM Do, YYYY`)}.</p>
      <form>
        <div>
          Watering Date:{" "}
          <input defaultValue={props.schedule.watering_start_date} name="watering_start_date" type="text" />
        </div>
        <button className="button-33" type="submit">
          Update Schedule
        </button>
      </form>
    </div>
  );
}
