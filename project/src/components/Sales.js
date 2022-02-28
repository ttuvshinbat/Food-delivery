import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodPortions"
function Sales(prop) {

  const [foods] = useFood()
  const [mainSales, setMainSales] = useState([])

  useEffect(() => {
   
    setMainSales(foods
      .filter((data) => {
        switch (prop.type) {
          case "Хямдралтай":
            return data.discount !== 0;
          case "Үндсэн хоол":
            return data.category === "Үндсэн хоол";
          case "Салад ба зууш":
            return data.category === "Салад ба зууш";
          case "Амттан":
            return data.category === "Амттан";
        }
      }).slice(0, 4))
  }, [foods], prop.type)
  return (
    <Container>
      <div className="row">
        {mainSales.map((data) => (
          <Card
            data={data} key={data._id}
          />
        ))}
      </div>
    </Container>
  );
}
export default Sales;
