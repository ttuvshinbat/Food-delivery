import React from "react";
// import "./App.css";
import InfoPanel from "./InfoPanel";
import Slider from "./Slider";
import "../../src/App.css"
import CategoryLabel from "./CategoryLabel";
import AddressVertification from "./AddressVertification";
import { useFood } from "../contexts/FoodPortions"

function Home() {
    
    return (
        <div>
            
            <Slider />
            <InfoPanel />
            <CategoryLabel />

        </div>
    );

}

export default Home;
