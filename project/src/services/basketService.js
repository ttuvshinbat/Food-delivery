export const addItem = async (props) => {
  const token = localStorage.getItem("token");
  const data = JSON.parse(localStorage.userInfo);

  return await fetch("https://dev-api.mstars.mn/api/basket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      food_id: props.food_id,
      user_email: data.email,
      quantity: props.count,
      token: token,
    }),
  }).then((data) => data.json());
};

export const getBasketinfo = async () => {
  const token = localStorage.getItem("token");
  const data = JSON.parse(localStorage.userInfo);

  return await fetch("https://dev-api.mstars.mn/api/basket-info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_email: data.email,
      token: token,
    }),
  });
};

export const deleteBasket = async (props) => {
  const token = localStorage.getItem("token");
  const data = JSON.parse(localStorage.userInfo);
  return await fetch("https://dev-api.mstars.mn/api/basket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      food_id: props.product._id,
      user_email: data.email,
      quantity: -props.quantity,
      token: token,
    }),
  });
};
export const basketService = {
  getBasketinfo,
  addItem,
  deleteBasket,
};
