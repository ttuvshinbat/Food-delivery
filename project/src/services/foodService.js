

export const getAllFood = async () =>{
    return await fetch ('https://dev-api.mstars.mn/api/foods', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
        
    }
    )
}

export const getAllPic = async () =>{
    return await fetch ("https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" , {
        method: "GET",
        headers: {
            "Countent-Type": "application/json",
        },
        body: JSON.stringify(),
    })
}

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
}