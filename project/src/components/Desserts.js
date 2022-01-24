import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllFood } from "../services/foodService";

function Desserts() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getAllFood()
      .then(res => res.json())
      .then(data => setFoods(data.data))
  }, []);


  let desserts = foods.filter((p) => p.category === "амттан").slice(0, 4);

  return (
    <Container>
      <div className="row">
        {desserts.map((i) => {
          return (
            <Card data={i} key={i._id}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default Desserts;
