import React from "react";
import Meal from "../img/meal.png"
import DeleteMeal from "../img/delete_meal.png"
import "../css/cartItems.css"

function CartItems() {
    return (
        <div className="main-body">
            <div className="cart-items">

            <div className="thumbnail">
                <img src={Meal} alt="" className="item-image" />
            </div>
            <div className="details">
                <p className="cart-item-name">Хулууны зутан</p>
                <p className="cart-item-price">6,800₮</p>
                <div className="buttons">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
            </div>
            <div className="close-button">
                <img src={DeleteMeal} alt="" />
            </div>
            </div>
            <div className="order-section">
                <p className="totalPrice">Нийт: 6,800₮</p>
                <button className="order-button">Захиалах</button>
            </div>
        </div>
    )
}

export default CartItems;
