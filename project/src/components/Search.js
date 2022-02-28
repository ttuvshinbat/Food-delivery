import React from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string'
import { useFood } from "../contexts/FoodPortions"
import Cards from "./Card";

function Search() {

    const { search } = useLocation()
    const values = queryString.parse(search)
    const [foods] = useFood()
    let pro = foods.filter((sda) => sda.name.toLowerCase().includes(values.q))
    console.log(pro)


    return (
        <div className="">
             <div className="row">
            {pro.map(data =>
         
              <div className="col-4">
              <Cards data={data} />
              </div>

      
                    
           


            )}
                </div>



        </div>
    )
}
export default Search;
