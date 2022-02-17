import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodPortions"
function Desserts() {

  const [mainMenu, setMainMenu] = useState([]);
  const [foods] = useFood()

  useEffect(() => {
    setMainMenu(foods
      .filter((p) => {
        return p.category === "Үндсэн хоол"
      }).slice(4, 8))

  }, [foods]);

  return (
    <Container>
      <div className="row">
        {mainMenu.map((data) => {
          return (
            <Card data={data} key={data._id}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default Desserts;
