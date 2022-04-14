import { createContext, useState, useContext, useEffect } from "react";
import { basketService } from "../services/basketService";

const BasketContext = createContext();
export function useBasket() {
  return useContext(BasketContext);
}
export const BasketProvider = (props) => {
  const [basket, setBasket] = useState([]);
  const [changed, setChanged] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleDataChange = () => {

    setIsUpdate(true);
  };
  useEffect(() => {

    basketService
      .getBasketinfo()
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data)
          setBasket(data.data);
        } else {
          console.log("error");
        }
      })
      .finally((e) => {
        setChanged(true);
        setIsUpdate(false);
      });
  }, [changed, isUpdate]);

  return (
    <BasketContext.Provider value={[basket, setBasket, handleDataChange]}>
      {props.children}
    </BasketContext.Provider>
  );
};

export const Consumer = BasketContext.Context;
