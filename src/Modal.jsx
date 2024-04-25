import "./Modal.css";
import { useState } from "react";
import { ScheduleNew } from "./ScheduleNew";
import axios from "axios";

export function Modal(props) {
  const [plants, setPlants] = useState([]);

  const handleCreateSchedule = (params, successCallback) => {
    console.log("handleCreateSchedule", params);
    axios.post("http://localhost:3000/schedules.json", params).then((response) => {
      setPlants([...plants, response.data]);
      successCallback();
    });
  };

  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <ScheduleNew onCreateSchedule={handleCreateSchedule} />
          <div className="outer">
            <div className="inner">
              <label onClick={props.onClose}>Close</label>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
