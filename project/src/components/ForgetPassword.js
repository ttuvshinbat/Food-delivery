import React, { useState } from "react";
import Buttons from "../components/Button"
import { NavLink } from "react-router-dom";
import "../css/forgetpassword.css"


const ForgetPassword = () => {

    const [show, setSHow] = useState(true)
    const onPassword = () => setSHow(!show)

    const [count, setCount] = useState(0)
    const clickHandler = () => {
        setCount(count + 1)
    }
    const [email, setEmail] = useState('')
    
    const handleChange= (event) =>{
       setEmail(event.target.value)
      }
    return (
        <div className="container my-3">
            <form className="row flex-column mehanic-margin">
                <NavLink className="faceItems ps-0" to="/forget">
                    <h5 className="col-12 ps-3 text-dark border-left">НУУЦ ҮГ СЭРГЭЭХ</h5>
                </NavLink >
                <div className={show ? "hideclass" : "showclass forgetpassword1 col-10 col-sm-8 col-md-7 col-lg-6 py-2 my-2   "}>
                    <p className="">Таны <span className="orange">"{email}" </span>  хаяг руу нууц үг сэргээх код илгээх болно. </p>
                </div>
                <div className={show ? "hideclass " : "showclass py-2 my-2 row     "}>
                    <label className="col-12 p-0 text-dark" for="passwordInput">Нууц үг сэргээх код</label>
                    <input type="password" className=" py-2 ps-2 forgetpassword1 col-sm-10 col-md-8 col-lg-7   my-3 " placeholder="Нууц үг сэргээх" />
                </div>
                <div className={show ? " showclass py-2 my-2 row " : "hideclass "}>
                    <label className="col-12 p-0 text-dark" for="passwordInput">И-мэйл</label>
                    <input type="text" id="passwordInput" onChange={handleChange} className="col-sm-10 col-md-8 col-lg-7 ps-2 py-2 forgetpassword1   my-3 " placeholder="И-мэйл хаягаа оруулна уу" />
                </div>

                <div className={(count === 1) ? 'hideclass' : "showclass py-2 my-2 row"}>
                    <input type="button" onClick={() => {
                        onPassword()
                        clickHandler()
                    }} className="forgetpassword col-sm-10 col-md-8  col-lg-7 py-2 " value="Үргэлжлүүлэх" />

                </div>
                <NavLink className={(count === 1) ? " showclass row faceitems  " : "hideclass py-2 my-2 row "} to="/newpassword">
                    <input type="button" onClick={onPassword} className="forgetpassword col-sm-10 col-md-8  col-lg-7 py-2 " value="Үргэлжлүүлэх" />
                </NavLink>
            </form>


        </div>





    )

}
export default ForgetPassword
