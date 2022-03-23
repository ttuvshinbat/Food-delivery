import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { FoodProvider } from "./contexts/FoodPortions";
import { SpinnerProvider } from "./contexts/WaitSpinner";

ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
      <UserProvider>
        <SpinnerProvider>
          <App />
        </SpinnerProvider>
      </UserProvider>
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
