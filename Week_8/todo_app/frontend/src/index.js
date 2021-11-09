import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>,
  document.getElementById("root")
);
