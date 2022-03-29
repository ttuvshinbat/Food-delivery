import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { FoodProvider } from "./contexts/FoodPortions";
import { SpinnerProvider } from "./contexts/SpinnerContext";
import { BasketProvider } from "./contexts/BasketContext"

ReactDOM.render(
  <React.StrictMode>
    <BasketProvider>


      <FoodProvider>
        <UserProvider>
          <SpinnerProvider>

            <App />

          </SpinnerProvider>
        </UserProvider>
      </FoodProvider>
    </BasketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
