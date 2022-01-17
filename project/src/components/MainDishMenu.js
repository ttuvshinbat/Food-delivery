import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MainDishMenu() {
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);

  let menu = mainMenu.filter((j) => j.category === "үндсэн хоол");
  return (
    <Container>
      <div className="row">
        {menu.map((data) => {
          return (
            <Card
              name={data.name}
              price={data.price}
              portion={data.portion}
              stock={data.stock}
              img={data.img}
              category={data.category}
              ingredients={data.ingredients}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default MainDishMenu;
