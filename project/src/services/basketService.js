export const addItem = async(props) =>{
    const token = localStorage.getItem("token");
    const data = JSON.parse(localStorage.userInfo)
  console.log(props)
  console.log(data.email)
  
    return await fetch("https://dev-api.mstars.mn/api/basket",{
        method : "POST", 
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            user_email: data.email,
            food_id: props.food_id,
            quantity: props.count,
            token:token
        }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}


export const getBasketinfo = async (props) => {
    const token =localStorage.getItem("token");
   console.log(localStorage)
    
    
    console.log(token)
    console.log(props)

    return await fetch("https://dev-api.mstars.mn/api/basket-info", {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_email: "ttuvshinbat@yahoo.com",
            token: token,
        }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

}
export const basketService = {
    getBasketinfo, addItem
}
