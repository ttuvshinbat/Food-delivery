import React, { useState } from "react";
import "../css/userProfile.css";
import TextInput from "./TextInput";
import { Modal, Button } from "react-bootstrap";
import "../css/button.css";
import Swal from "sweetalert2";


const UserProfile = () => {

  const done = () => {

    let timerInterval;
    Swal.fire({
      title: "Хэрэглэгчийн мэдээлэл амжилттай хадгалагдлаа.",
      timer: 3000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    })

  }


  return (
    <div className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center">
      <p className="hmm t">Хэрэглэгч</p>

      <TextInput type={"text"} name={"Нэр"} />
      <TextInput type={"tel"} name={"Утасны дугаар"} />
      <Button onClick={done} className="signupTabletView ">
        Хадгалах
      </Button>
    </div>
  );
};
export default UserProfile;
