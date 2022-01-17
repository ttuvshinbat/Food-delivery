import React, { useState } from "react";
import Buttons from "../components/Button"
import { NavLink } from "react-router-dom";
import "../css/forgetpassword.css"


const NewPassword = () => {

    const [show, setSHow] = useState(true)
    const onPassword = () => setSHow(!show)

    return (
        <div className="container my-3">
            <form action="" className="row flex-column mehanic-margin">
                <div className="faceItems ps-0" >
                    <h5 className="col-12 ps-3 text-dark border-left">НУУЦ ҮГ ЗОХИОХ</h5>
                </div >
                <div className={show ? "hideclass" : "showclass forgetpassword1 col-10 posi col-sm-8 col-md-7 col-lg-6 py-2 my-2   "}>
                    <p className="">Нууц үг амжилттай хадгалагдлаа. <input className="closedbutton ps-4" type="button" value="X" /></p>
                </div>
                <div className="showclass py-2 my-2 row     " >
                    <label className="col-12 p-0 text-dark" for="passwordInput">Нууц үг</label>
                    <input type="password" className=" py-2 ps-2 forgetpassword1 col-sm-10 col-md-8 col-lg-7   my-3 " placeholder="Нууц үг оруулна уу." />
                </div>
                <div className=" showclass py-2 my-2 row ">
                    <label className="col-12 p-0 text-dark" for="passwordInput">Нууц үг давтах</label>
                    <input type="password" id="passwordInput" className="col-sm-10 col-md-8 col-lg-7 ps-2 py-2 forgetpassword1   my-3 " placeholder="Нууц үгээ давтана уу." />
                </div>

                <div className=" row">
                    <input type="button" onClick={onPassword} className="forgetpassword col-sm-10 col-md-8  col-lg-7 py-2 " value="Үргэлжлүүлэх" />

                </div>
            </form>


        </div>





    )

}
export default NewPassword
