// import Buttons from "@restart/ui/esm/Button";
import React, { useState } from "react";

import Buttons from "./Button.js";
import TextInput from "./TextInput.js";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/login.css";
import { Form } from "react-bootstrap";
import { userService } from "../services/userService";
import { useUser } from "../contexts/UserContext";

const Login = () => {
  const history = useHistory();
  const [cred, setCred] = useState();
  const [email, setEmail] = useState(0);
  const [user, setUser] = useUser();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    userService
      .loginUser({
        email: event.target.email.value,
        password: event.target.password.value,
        // name: "temka",
        // address: "mongolia"
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          userService.userinfoStorage(data);
          setUser({
            userName: data.data.name,
            email: data.data.email,
            adress: data.data.address,
          });
          history.push("/");
        } else {
          alert("failed to optain login");
        }
      });
  };

  // const history = useHistory();
  // const routeChange = () => {
  //   let path = "/register";
  //   history.push(path);
  // };

  return (
    <Form
      onSubmit={handleSubmit}
      className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center"
    >
      <p className="col-6 hmm fw-bold ms-2 ">нэвтрэх</p>

      <TextInput type={"email"} name={"И-мэйл"} />
      <TextInput type={"password"} name={"Нууц үг"} />
      <NavLink className="forgotPass mb-4" to="/forget">
        <a className="forgotPass mb-4" href="#">
          Нууц үгээ мартсан уу.
        </a>
      </NavLink>

      {/* <p></p> */}
      <Buttons class={"loginTabletView"} type={"Login"} value="НЭВТРЭХ" />
      {/* <p></p> */}
      <p className="underline">эсвэл</p>

      <Link to={"/register"} className="registerButton">
        <Buttons
          className="registerButton"
          class={"loginTabletView"}
          type={"Бүртгүүлэх"}
          value="Бүртгүүлэх"
          // onClick={() => routeChange()}
        />
      </Link>
    </Form>
  );
};

export default Login;
