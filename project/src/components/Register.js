import Buttons from "./Button.js";
import React from "react";
import TextInput from "./TextInput.js";
import "../css/login.css";

const Register = () => {
  return (
      
      <div className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center">
      
      <p className="hmm fw-bold">Бүртгүүлэх</p>

      <TextInput type={"email"} name={"И-мэйл"} />
      <TextInput type={"password"} name={"Нууц үг"} />
      <TextInput type={"password"} name={"Нууц үг давтах"} />

      <div className="agreeTo d-flex justify-content-between">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          <a className="mb-4">Үйлчилгээний нөхцөл зөвшөөрөх</a>
        </label>
      </div>

      <Buttons class={"signupTabletView"} type={"Бүртгүүлэх"} />
    </div>
  );
};

export default Register;
