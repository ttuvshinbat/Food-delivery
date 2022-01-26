import React from "react";
// import "./App.css";
import InfoPanel from "./InfoPanel";
import Slider from "./Slider";
import "../../src/App.css"
import CategoryLabel from "./CategoryLabel";
import AddressVertification from "./AddressVertification";
import { Button } from "react-bootstrap";

function Home() {
    return (
        <div>
            <Slider />
            <InfoPanel />
            <CategoryLabel />
            <Button />

        </div>
    );

}

export default Home;
