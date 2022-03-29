import { createContext, useState, useContext, useEffect } from "react";
import { basketService } from "../services/basketService";

const BasketContext = createContext();
export function useBasket() {
    return useContext(BasketContext);
}
export const BasketProvider = (props) => {
    const [basket, setBasket] = useState([]);
    const [changed, setChanged] = useState(false);
    useEffect(() => {

        basketService
            .getBasketinfo()
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {

                    setBasket(data.baskets)
                } else {
                    console.log("error")
                }
            })
            .finally((e) => { setChanged(true) })
    }, [changed])

    return (
        <BasketContext.Provider value={[basket, setBasket]}>
            {props.children}
        </BasketContext.Provider>
    )
}