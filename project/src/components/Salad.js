import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Salad() {
  const [mainMenu, setMainMenu] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);
  let menu = mainMenu.filter((m) => m.category === "салад ба зууш").slice(0, 4);

  return (
    <Container>
      <div className="row">
        {menu.map((data) =>
        (
          <Card
            img={data.img}
            name={data.name}
            discountPrice={data.discountPrice}
            price={data.price}
            sales={data.sales}
            percent={data.discountPercentage}
            ingredients={data.ingredients}
          />
        )
        )}
      </div>

    </Container>
  );
}
export default Salad;
