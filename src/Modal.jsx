import "./Modal.css";
import { useState } from "react";

export function Modal(props) {
  const [plants, setPlants] = useState([]);

  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
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
