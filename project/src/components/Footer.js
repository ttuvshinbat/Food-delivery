import React from "react";
import foodDelivery from "../icons/foodDelivery.png";
import facebookicon from "../icons/facebook_logo.png";
import instagramIcon from "../icons/instagram_logo.png";
import twitterIcon from "../icons/twitter_logo.png";
import { NavLink } from 'react-router-dom'
import "../css/footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 pt-4 ">
                        <img className="me-2 " src={foodDelivery} alt="" />
                        <span className="food">Food delivery</span>
                    </div>
                    <div className=" row col-md-8 my-3 col-md-text-decoration mb-5 ">
                        <div className="col-6 mt-3 ps-3  ">
                            <NavLink className="faceItems" to="/">
                                <p className="face">Нүүр</p>
                            </NavLink>
                            <NavLink className="faceItems" to="/menu">
                                <p className="face">Хоолны цэс</p>
                            </NavLink>
                            <NavLink className="faceItems" to="/delivery">
                                <p className="face">Xүргэлтийн бүс</p>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-3 ">
                            <p className="face">Холбоо барих</p>
                            <p className="nuuts">(976) 77123456</p>
                            <p className="nuuts">(976) 77123456</p>
                        </div>
                    </div>
                    <div className="flex-1 inactive-4">
                        <div className=" logos-1  margin100 text-ehlel">
                            <img className="m-2" src={facebookicon} alt="facebook" />
                            <img className="m-2" src={instagramIcon} alt="instagram" />
                            <img className="m-2" src={twitterIcon} alt="twitter" />
                        </div>
                    </div>
                    <div className="row border-t">
                        <div className="row col-md-4 col-lg-4 my-3">
                            <div className="inactive-3 ">
                                <div className="row   flex-3">
                                    <p className="inactive-1">Бидэнтэй нэгдээрэй</p>
                                    <div className="">
                                        <img className="m-2" src={facebookicon} alt="facebook" />
                                        <img className="m-2" src={instagramIcon} alt="instagram" />
                                        <img className="m-2" src={twitterIcon} alt="twitter" />{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row  col-md-8 col-lg-8 d-md-flex my-3 ">
                            <div className="col-md-12 col-lg-6 text-md-end  ">
                                <div className=" row text-sm-start text-md-end d-md-flex  ">
                                    <NavLink className="faceItems nuuts order-md-1 px-2 col-md-6 " to="/privacy">
                                        <p className="text-white ">
                                            Нууцлалын бодлого
                                        </p>
                                    </NavLink>

                                    <NavLink className="faceItems nuuts order-md-1 px-2 col-md-6 " to="/termofuse">
                                        <p className=" text-white">
                                            Үйлчилгээний нөхцөл
                                        </p>
                                    </NavLink>

                                </div>
                            </div>
                            <div className="text-end col-lg-6 my-2 pb-5">
                                <p className="last">&copy; 2020 Mstars Foods LLC</p>
                                <p className="inactive-2">
                                    {" "}
                                    Зохигчийн эрх хуулиар хамгаалагдсан.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
