import React from "react";
import '../css/category.css'
import MainDishMenu from "./MainDishMenu";
import Sales from "./Sales";
import Salad from "./Salad";
import Desserts from "./Desserts"

const CategoryLabel = () => {
    const torol= ["Хямдралтай","Үндсэн хоол" , "Салад ба зууш","Амттан" ]
    
    return (
        <div className="container my-5 pb-5">
       { torol.map(data =>{
             <div className="row border-b mx-3 my-4 ">
             <p className="col-6 hmm fw-bold ms-2 ">{data}</p>
             <button className="col-2 ondor py-2 pe-0 me-0  arrow text-end">
                 <span className="inactive-10">Бүгдийг харах</span>
                 <span className="orgon">&#62;</span> </button>
                 <Sales type={data}/>
         </div>
        
        })}
        
            
           
            <div className="row border-b m-auto my-4">
                <p className="col-6 hmm fw-bold ms-2">Салад ба зууш</p>
                <button className="col-2 ondor py-2 pe-0 me-0  arrow text-end">
                    <span className="inactive-10">Бүгдийг харах</span>
                    <span className="orgon">&#62;</span> </button>

            </div>
            <Sales/>
            <div className="row border-b m-auto my-4">
                <p className="col-6 hmm fw-bold ms-2 ">Амттан</p>
                <button className="col-2 ondor py-2 pe-0 me-0  arrow text-end">
                    <span className="inactive-10">Бүгдийг харах</span>
                    <span className="orgon">&#62;</span> </button>

            </div>
            <Desserts />
        </div>
    )
}
export default CategoryLabel;
