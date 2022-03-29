import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import '../css/card.css'
import TestModal from './ExampleModal'

const Card = (props) => {
    const [showModal, setShowModal] = useState(false)
    const data = props.data;

    let cards = data.discount ? (

        <div className="card"
        >
            <img src={'https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com' + data.image} alt="" />
            <div className="badge">{data.discount}%</div>
            <p>{data.name}</p>
            <div className="middle">
                <img className="hoverImg" src="/icons/whiteMarket.svg" alt="" />
                <div className="hoverText">Сагслах</div>
            </div>
            <div className="price">
                <p className="activePrice">{new Intl.NumberFormat().format(data.price - data.price * data.discount / 100)}₮ </p>
                <strike className="strike-dark">{new Intl.NumberFormat().format(data.price)}₮ </strike>
            </div>
        </div>
    ) : (
        <div className="card"
        >
            <img src={'https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com' + data.image} />
            <div className="middle">
                <img className="hoverImg" src="/icons/whiteMarket.svg" alt="" />
                <div className="hoverText">Сагслах</div>
            </div>
            <p>{data.name}</p>
            <div className="price">
                <p className="activePrice">{new Intl.NumberFormat().format(data.price)}₮ </p>
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