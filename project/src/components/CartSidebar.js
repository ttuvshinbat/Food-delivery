import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import "../css/offcanvas.css";
import CartItems from "./CartItems";

function CartSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
      <div onClick={handleShow} className="cart-icon">
        <a>Сагс</a>
        <img
          src="/icons/busketicon.svg"
          //   onClick={handleShow}
          className="cart-icon"
        />
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-title">
            Таны сагс
          </Offcanvas.Title>
        </Offcanvas.Header>
        <span className="title-underline"></span>
        <Offcanvas.Body>
          <CartItems />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartSidebar;
