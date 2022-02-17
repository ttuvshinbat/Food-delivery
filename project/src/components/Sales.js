import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodPortions"
function Sales() {
  // const [sale, setSale] = useState([]);
  // useEffect(() => {
  //   fetch("../data/foods.json")
  //     .then((response) => response.json())
  //     .then((data) => setSale(data));
  // }, []);
  // let mainSales = sale.filter((i) => i.sales === true).slice(0, 4);
  const [foods] = useFood()
  const [mainSales, setmainSales] = useState([])

  useEffect(() => {
    setmainSales(foods
      .filter((data) => {
        return data.sales === true
      }).slice(0, 4))
  }, [foods])
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
