import React from "react";
import { useBasket } from "../contexts/BasketContext";
// import "./App.css";


function User() {
  const [basket, setBasket] = useBasket([])
  console.log(basket)
  const a = 10;
  const b = 5;
  const c = a * b;
  const d = a + b;


  return (
    <div>hello  </div>
  )
}

export default User;
