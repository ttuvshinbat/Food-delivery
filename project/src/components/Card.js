import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import '../css/card.css'
import TestModal from './ExampleModal'

const Card = (props) => {
    const [showModal, setShowModal] = useState(false)
    let cards = props.sales ? (
        <div className="card"
        >
            <img src={props.img} alt="" />
            <div className="badge">{props.percent}%</div>
            <p>{props.name}</p>
            <div class="middle">
                <img className="hoverImg" src="/icons/whiteMarket.svg" alt="" />
                <div class="hoverText">Сагслах</div>
            </div>
            <div className="price">
                <p className="activePrice">{new Intl.NumberFormat().format(props.price - props.price * props.percent / 100)}₮ </p>
                <strike className="strike-dark">{new Intl.NumberFormat().format(props.price)}₮ </strike>
            </div>
        </div>
    ) : (
        <div className="card"
        >
            <img src={props.img} />
            <div class="middle">
                <img className="hoverImg" src="/icons/whiteMarket.svg" alt="" />
                <div class="hoverText">Сагслах</div>
            </div>
            <p>{props.name}</p>
            <div className="price">
                <p className="activePrice">{new Intl.NumberFormat().format(props.price)}₮ </p>
            </div>
        </div>
    )

    return (
        <>

            <Col xs={6} md={3} className="mb-4" >
                <div onClick={() => setShowModal(true)}
                    className="singleCard">
                    {cards}
                </div>
            </Col >


            {showModal && <TestModal data={props} showHandler={setShowModal} />}
        </>
    )
}

export default Card;