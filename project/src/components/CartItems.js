import React, { useEffect, useState } from "react";
import Meal from "../img/meal.png"
import DeleteMeal from "../img/delete_meal.png"
import "../css/cartItems.css"
import { basketService , addItem} from "../services/basketService";
function CartItems() {
    const [first, setfirst] = useState({"success": false})
    useEffect(() => {
        basketService.getBasketinfo()
        .then((res) => res.json())
        .then((data) => setfirst(data))
    }, [])
 
    console.log(first)
const el = first.baskets
console.log(first.success)
let summit = 0;





    return (
        <div className="main-body">
           
            { first.success === true ? el.map(data => {
        function deleted (){
            basketService.addItem(
            {count: data.product.portion-data.product.portion}
           
            )
          
            }
            
        summit = summit + data.product.price
                return (<div>
                    
                    <div className="cart-items">
                        <div className="thumbnail">
                            <img src={'https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com' + data.product.image} alt="" className="item-image" />
                        </div>
                        <div className="details">
                            <p className="cart-item-name">{data.product.name}</p>
                            <p className="cart-item-price">{data.product.price}</p>
                            <div className="buttons">
                                <button>-</button>
                                <p>{data.product.portion}</p>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="close-button">
                            <img src={DeleteMeal} onClick={ deleted } alt="" />
                        </div>
                    </div>
                   
                    </div>
                )
            })  :<div>zahialga achaallaj baina</div>}
                 <div className="order-section">
                        <p className="totalPrice">{summit}</p>
                        <button className="order-button">Захиалах</button>
                    </div>

        </div>
    )
}

export default CartItems;
