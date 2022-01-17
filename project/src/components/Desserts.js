import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Desserts() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  let desserts = foods.filter((p) => p.category === "амттан").slice(0, 4);

  return (
    <Container>
      <div className="row">
        {desserts.map((i) => {
          return (
            <Card
              img={i.img}
              name={i.name}
              discountPrice={i.discountPrice}
              price={i.price}
              sales={i.sales}
              percent={i.discountPercentage}

              ingredients={i.ingredients}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default Desserts;
