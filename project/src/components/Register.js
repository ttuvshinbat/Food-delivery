import Buttons from "./Button.js";
import React from "react";
import TextInput from "./TextInput.js";
import "../css/login.css";
import { Form } from "react-bootstrap";
import { userService } from "../services/userService.js";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    userService
      .registerUser({
        email: event.target.email.value,
        password: event.target.password.value,
        name: "Tuvshee",
        address: "mongolia",
      })
      .then((sda) => {
        sda.json();
      })
      .then((data) => console.log(data));
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center"
    >
      <p className="hmm fw-bold">Бүртгүүлэх</p>

      <TextInput type={"email"} name={"И-мэйл"} value="" />
      <TextInput type={"password"} name={"Нууц үг"} value="" />
      <TextInput type={"passwordRepeat"} name={"Нууц үг давтах"} value="" />

      <div className="agreeTo d-flex justify-content-between">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" for="flexCheckDefault">
          <a className="mb-4">Үйлчилгээний нөхцөл зөвшөөрөх</a>
        </label>
      </div>

      <Buttons class={"signupTabletView"} type="submit" />
    </Form>
  );
};

export default Register;
