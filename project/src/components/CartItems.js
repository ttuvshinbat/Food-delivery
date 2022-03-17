import React, { useEffect, useState } from "react";
import Meal from "../img/meal.png";
import DeleteMeal from "../img/delete_meal.png";
import "../css/cartItems.css";
import {
  basketService,
  addItem,
  update,
  deleteBasket,
} from "../services/basketService";
function CartItems() {
  const [first, setfirst] = useState({ success: false });
  const [changed, setChanged] = useState(false);
  const [changed1, setChanged1] = useState();
  const [changed2, setChanged2] = useState();
  useEffect(() => {
    basketService
      .getBasketinfo()
      .then((res) => res.json())
      .then((data) => setfirst(data));
  }, [changed, changed1, changed2]);

  const deletedBasket = async (d) => {
    basketService
      .deleteBasket(d)
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          setChanged(!changed);
        }
      });
  };
  const updateBasket = async (q, id) => {
    basketService.addItem({ count: q, food_id: id });
  };

  const el = first.baskets;
  let summit = 0;

  return (
    <div className="main-body">
      {first.success === true ? (
        el.map((data) => {
          summit = summit + data.product.price;
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
                  <p className="cart-item-price">{data.product.price}</p>
                  <div className="buttons">
                    <button
                      onClick={() => {
                        {
                          setChanged1(updateBasket(-1, data.product._id));
                        }
                      }}
                    >
                      -
                    </button>
                    <p>{data.quantity}</p>
                    <button
                      onClick={() => {
                        setChanged2(updateBasket(1, data.product._id));
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
        })
      ) : (
        <div>zahialga achaallaj baina</div>
      )}
      <div className="order-section">
        <p className="totalPrice">{summit}</p>
        <button className="order-button">Захиалах</button>
      </div>
    </div>
  );
}

export default CartItems;
