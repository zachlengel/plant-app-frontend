import "./Modal.css";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function LoginModal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <Login />
          <h1 className="or">-OR-</h1>
          <Signup />
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
