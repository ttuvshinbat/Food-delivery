import React, { useEffect, useState } from "react";
import DeleteMeal from "../img/delete_meal.png";
import "../css/cartItems.css";
import { basketService } from "../services/basketService";
import { NavLink } from "react-router-dom";
import { useSpinner } from "../contexts/SpinnerContext";
import { useBasket } from "../contexts/BasketContext";

function CartItems(props) {
  const [showSpinner, setShowSpinner] = useSpinner(false);

  const [basket, setBasket, handleDataChange] = useBasket([]);
  const [changed, setChanged] = useState(false);
  console.log(basket);

  // useEffect(() => {
  //   basketService
  //     .getBasketinfo()
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .finally((e) => );
  // }, [showSpinner]);

  useEffect(() => {
    setShowSpinner(false);
  }, []);
  // window.location.reload();
  const dropClick = () => {
    props.handleClose();
    console.log();
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
      })
      .catch((e) => setShowSpinner(false))
      .finally((e) => {
        setShowSpinner(false);
        handleDataChange();
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
      .catch((e) => setShowSpinner(false))
      .finally((e) => {
        setShowSpinner(false);
        handleDataChange();
      });
  };

  let summit = 0;

  return (
    <div className="main-body">
      {basket.map((data) => {
        if (data.order.food_id.discount === 0) {
          summit += data.order.food_id.price * data.order.quantity;
        } else {
          summit +=
            (data.order.food_id.price / 100) *
            (100 - data.order.food_id.discount) *
            data.order.quantity;
        }

        return (
          <div>
            <div className="cart-items">
              <div className="thumbnail">
                <img
                  src={
                    "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" +
                    data.order.food_id.image
                  }
                  alt=""
                  className="item-image"
                />
              </div>
              <div className="details">
                <p className="cart-item-name">{data.order.food_id.name}</p>
                <p className="cart-item-price">
                  {data.order.food_id.discount === 0
                    ? data.order.food_id.price
                    : (data.order.food_id.price / 100) *
                      (100 - data.order.food_id.discount)}
                </p>
                <div className="buttons">
                  <button
                    onClick={() => updateBasket(-1, data.order.food_id._id)}
                  >
                    -
                  </button>
                  <p>{data.order.quantity}</p>
                  <button
                    onClick={() => {
                      updateBasket(1, data.order.food_id._id);
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
