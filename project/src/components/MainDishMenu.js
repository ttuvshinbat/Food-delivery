import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodPortions"

function MainDishMenu() {
  const [mainMenu, setMainMenu] = useState([]);
  const [foods]=useFood()

  useEffect(() => {
   setMainMenu(foods
    .filter((p) =>{ 
      return p.category === "Үндсэн хоол"
    }).slice(0, 4))

  }, [foods]);

  // let menu = mainMenu.filter((j) => j.category === "үндсэн хоол");
  return (
    <Container>
      <div className="row">
        {mainMenu.map((data) => {
          return (
            <Card
             data={data}
             key={data.name}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default MainDishMenu;
