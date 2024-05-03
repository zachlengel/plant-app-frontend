import "./Modal.css";

export function Modal(props) {
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
