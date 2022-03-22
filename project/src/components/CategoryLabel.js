import React from "react";
import "../css/category.css";
import Sales from "./Sales";

const CategoryLabel = () => {
  const torol = ["Хямдралтай", "Үндсэн хоол", "Салад ба зууш", "Амттан"];

  return (
    <div className="container my-5 pb-5">
      {torol.map((data) => {
        return (
          <div className="row border-b mx-3 my-4 ">
            <p className="col-6 hmm fw-bold ms-2 ">{data}</p>
            <button className="col-2 ondor py-2 pe-0 me-0  arrow text-end">
              <span className="inactive-10">Бүгдийг харах</span>
              <span className="orgon">&#62;</span>{" "}
            </button>
            <Sales type={data} key={data} />
          </div>
        );
      })}
    </div>
  );
};
export default CategoryLabel;
