import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import "./index.css";

import RegisterUser from "./components/Form";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer /> <RegisterUser />
  </>
);
