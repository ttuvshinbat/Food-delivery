import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodPortions"
function Salad() {
  const [mainMenu, setMainMenu] = useState([]);

  const [foods] = useFood()

  useEffect(() => {
    setMainMenu(foods
      .filter((p) => {
        return p.category === "Салад ба зууш"
      }).slice(0, 4))

  }, [foods]);

  // useEffect(() => {
  //   fetch("../data/foods.json")
  //     .then((response) => response.json())
  //     .then((data) => setMainMenu(data));
  // }, []);
  // let menu = mainMenu.filter((m) => m.category === "салад ба зууш").slice(0, 4);

  return (
    <Container>
      <div className="row">
        {mainMenu.map((data) =>
        (
          <Card
            data={data}
            key={data.name}
          />
        )
        )}
      </div>

    </Container>
  );
}
export default Salad;
