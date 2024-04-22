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
          <h1>-OR-</h1>
          <Signup />
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
