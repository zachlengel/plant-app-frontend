import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

export function PlantShow(props) {
  const [plants, setPlants] = useState([]);
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
    <div className="show">
      <h1>{props.plant.name}</h1>
      <p>{props.plant.description}</p>
      <p>Sun: {props.plant.amount_of_sun} hours</p>
      <p>Water: {props.plant.days_to_water} days a week</p>
      {/* Schedule form */}
      <div className="new-schedule">
        <h1>Create a Schedule</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input defaultValue={props.plant.id} name="plant_id" type="hidden" />
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
    </div>
  );
}
