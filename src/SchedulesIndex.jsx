import React from "react";
import moment from "moment";

export function SchedulesIndex(props) {
  return (
    <div className="plants-index">
      <h1 className="index-header">Your Plants</h1>
      <div className="container">
        {props.schedules.map((schedule) => (
          <div key={schedule.id} className="card">
            <h2>{schedule.plant.name}</h2>
            <img src={schedule.plant.image_url} alt={schedule.plant.name} />
            <p>
              Your {schedule.plant.name} needs {schedule.plant.amount_of_sun} hours of sun a day and watered{" "}
              {schedule.plant.days_to_water} days a week.
            </p>
            <p>It will be time to water on {moment(schedule.watering_start_date).format(`MMMM Do, YYYY`)}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
