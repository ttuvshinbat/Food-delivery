export const getBasketinfo = async (userEmail) => {
    const token =localStorage.getItem("token");
    console.log(token)
    console.log(userEmail)
    return await fetch("https://dev-api.mstars.mn/api/basket-info", {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_email: userEmail,
            token: token,
        }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

}
export const basketService = {
    getBasketinfo,
}
