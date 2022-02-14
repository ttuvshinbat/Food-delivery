import {createContext, useState, useContext, useEffect} from "react"
import { foodService } from "../services/foodService"
export const  FoodContext = createContext({})
export function useFood( ) {
    return useContext(FoodContext)
}
export const FoodProvider = (props) =>{
    const [foods, setFoods]=useState([])
    useEffect(() =>{
        foodService
        .getAllFood()
        .then((response)=> response.json())
        .then((data) =>{
            if(data.success){
                setFoods(data.data)
            }
        }).finally(()=>{})
    },[])
    
    return (
        <FoodContext.Provider value ={[foods, setFoods]}>
            {props.children}
        </FoodContext.Provider>
    )
}