export const getAllFood = async () => {
  return await fetch("http://localhost:3002/api/foods/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
};

export const getAllPic = async () => {
  return await fetch(
    "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  );
};

// useEffect(() => {
//     const houseData = async () => {
//         await fetch("../data/delivery.json")
//             .then(response => response.json())
//             .then(data => {
//                 setData(data)
//                 console.log(house)
//             })
//     }
//     houseData()
// }, [])
export const foodService = {
  getAllFood,
};
