import React from "react";
import '../css/category.css'
import All from "./Sales";

const CategoryLabel = () => {
    const torol= ["Хямдралтай","Үндсэн хоол","Салад ба зууш","Амттан"];
    
    return (
        <div className="container my-5 pb-5">
       { torol.map(element =>{
           return(      <div className="row border-b mx-3 my-4 ">
           <p className="col-6 hmm fw-bold ms-2 ">{element}</p>
           
           <button className="col-2 ondor py-2 pe-0 me-0 my-3 arrow text-end">
               <span className="inactive-10">Бүгдийг харах</span>
               <span className="orgon">&#62;</span> </button>
               <All type ={element}/>
       </div>)
       
        
        })}
        
            
           
           
        
        </div>
    )
}
export default CategoryLabel;
