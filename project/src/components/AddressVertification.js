import React from "react";
import navlogo from '../icons/navlogo.svg';
import "../css/adress.css";
import { useState } from "react";


const AddressVertification = () => {
    
    const [state, setstate] = useState(0)
    const togleShow = (event) => {
        setstate(event.target.value)
    }

    const [state1, setstate1] = useState(0)
    const togleShow1 = (event) => {
         let test = event.target.value;
        setstate1(test)
    }
    const [state2, setstate2] = useState(0)
    const togleShow2 = (event) => {
        setstate2(event.target.value)
    }

    return (
        <div className="container">
            <div className="row my-2 py-2 ">
                <div className="col-12 d-flex flex-column    col-lg-6">
                    <p className="d-none d-md-block m-2 p-2 col-md-8  col-xl-7 shargal11 ">Алхам 1 > Хаягийн мэдээлэл оруулах</p>
                    <div className="gadna my-3 ondorOghoos " >
                        <form action="" className="forms m-auto">
                            <p className="p-2 m-2 col-12 d-md-none text-shargal">Хаягын мэдээлэл</p>
                            <p classNa me="d-none p-2 col-12 col-md-8 m-2 d-md-block align-items-start turshilt text-shargal"> Хаягаа оруулна уу</p>
                            <div className="col-12 col-md-8 my-2 selectbox">
                                <select name="" id="" onChange={togleShow} className={state == 0 ? "padd p-2 w-100  inputStyle" : "changeCss padd p-2 w-100"}>
                                    <option selected className="teneg" value="0"> Хан-Уул Дүүрэг </option>
                                    <option value="1">Баянзүрэх Дүүрэг</option>
                                    <option value="2">СүхБаатар Дүүрэг</option>
                                    <option value="3">Сонгинохайрхан Дүүрэг</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-8 my-2 selectbox">
                                <select name="" placeholder="Хороо сонгоно уу" onChange={togleShow1} className={state1 == 0 ? "padd p-2 w-100  inputStyle" : "changeCss padd p-2 w-100"} id="">
                                    <option selected value="0"> Хороо сонгоно уу</option>
                                    <option value="1">2-р Хороо</option>
                                    <option value="2">3-р Хороо</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-8 my-2 selectbox">
                                <select name="" onChange={togleShow2} className={state2 == 0 ? "padd p-2 w-100  inputStyle" : "changeCss padd p-2 w-100"} id="">
                                    <option selected value="0">Байр, гудамж сонгоно уу.</option>
                                    <option value="1">1-р байр</option>
                                    <option value="2">89-р байр</option>
                                </select>
                            </div>

                            <p className="p-2 col-12 col-md-8 m-2 d-md-none text-shargal" > Хаягын дэлэгрэнгүй</p>
                            <p className="d-none col-12 col-md-8 p-2 m-2 d-md-block text-shargal">Нэмэлт мэдээлэл</p>
                            <textarea className="col-12 p-2 m-2 col-md-8 inputStyle" name="" id="" cols="20" rows="5" placeholder="Орц, даврах, орцны код... "></textarea>
                            <p className="p-2 col-12 col-md-8 m-2 text-shargal">Утасны дугаар</p>
                            <input type="text" className="col-12 col-md-8 p-2 m-2 inputStyle" placeholder="Утасны дугаар оруулна уу." />
                            <p className="p-2 m-2 col-12 col-md-8 text-shargal">Төлбөр төлөх <span className="d-none d-md-inline-block">сонголт</span></p>
                            <div className="col-12   d-flex align-items-center justify-content-center">
                                <input className="checkbox mx-2" type="radio" id="adress-1" name="radio-1" />
                                <label for="adress-1" className="me-5"> Бэлнээр</label>
                                <input className="checkbox ms-5 me-2" type="radio" id="adress-2" name="radio-1" />
                                <label for="adress-2">Картаар</label>

                            </div>
                            <input type="submit" value="Захиалах" className="col-12 p-2 m-2 shargal11 d-md-none" />


                        </form>

                    </div>

                </div>
                <div className="col-12 d-none d-md-block col-lg-6  ">
                    <p className="d-none d-md-block my-2 py-2 col-md-8 col-xl-7  shargal11 ">Алхам 2 > Захиалага баталгаажуулах</p>
                    <form action="" method="POST">
                        <div className="gadna my-4 d-flex flex-column  justify-content-between ondorOghoos   " >
                            <div className="align-items-center d-flex flex-column justify-content-center ">
                                <p className="py-2 my-2"> Саламан загас (1)   <span className="text-shargal px-5 mx-5">11800₮ <button type="button " class="btn-close mx-5" aria-label="Close"></button> </span>   </p>
                                <p className="py-2 my-2"> Саламан загас (1)   <span className="text-shargal px-5 mx-5">11800₮ <button type="button " class="btn-close mx-5" aria-label="Close"></button> </span>   </p>
                            </div>
                            <div className="lastButton my-2 py-2">
                                <p className=" marginAvii">Нийт : 25800₮</p>
                                <input className="col-md-7 borderShargal " type="submit" value="Захиалах" name="" id="" />
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )


}
export default AddressVertification