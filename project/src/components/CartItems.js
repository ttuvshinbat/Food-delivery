import React, { useEffect, useState } from "react";
import Meal from "../img/meal.png";
import DeleteMeal from "../img/delete_meal.png";
import "../css/cartItems.css";
import { basketService } from "../services/basketService";
import { NavLink, Switch } from "react-router-dom";
import Delivery from "./Delivery";
import { useSpinner } from "../contexts/SpinnerContext";

function CartItems(props) {
  const [showSpinner, setShowSpinner] = useSpinner();

  const [basket, setBasket] = useState([]);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    basketService
      .getBasketinfo()
      .then((res) => res.json())
      .then((data) => {
        setBasket(data.baskets);
      })
      .finally((e) => setShowSpinner(false));
  }, [showSpinner]);
  const dropClick = () => {
    props.handleClose();
  };
  const deletedBasket = async (d) => {
    setShowSpinner(true);
    basketService
      .deleteBasket(d)
      .then((data) => data.json())
      .then((data) => {

        if (data.success) {

          setShowSpinner(false);
        }
      });
  };
  const updateBasket = (q, id) => {
    setShowSpinner(true);
    basketService
      .addItem({ count: q, food_id: id })
      .then((data) => {
        if (data.success) {
          setChanged(!changed);
        } else {
        }
      })
      .finally((e) => setShowSpinner(false));
  };

  let summit = 0;

  return (
    <div className="main-body">
      {basket.map((data) => {
        if (data.product.discount === 0) {
          summit += data.product.price * data.quantity;
        } else {
          summit +=
            (data.product.price / 100) *
            (100 - data.product.discount) *
            data.quantity;
        }

        return (
          <div>
            <div className="cart-items">
              <div className="thumbnail">
                <img
                  src={
                    "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" +
                    data.product.image
                  }
                  alt=""
                  className="item-image"
                />
              </div>
              <div className="details">
                <p className="cart-item-name">{data.product.name}</p>
                <p className="cart-item-price">
                  {data.product.discount === 0
                    ? data.product.price
                    : (data.product.price / 100) *
                    (100 - data.product.discount)}
                </p>
                <div className="buttons">
                  <button onClick={() => updateBasket(-1, data.product._id)}>
                    -
                  </button>
                  <p>{data.quantity}</p>
                  <button
                    onClick={() => {
                      updateBasket(1, data.product._id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="close-button">
                <img
                  src={DeleteMeal}
                  onClick={() => deletedBasket(data)}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="order-section">
        <p className="totalPrice">{summit}</p>
        <NavLink to="/address">
          <button className="order-button" onClick={dropClick}>
            Захиалах
          </button>
        </NavLink>
      </div>
    </div>
  );
}
export default CartItems;
