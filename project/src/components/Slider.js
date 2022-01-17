import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../img/banner-1.png";
import banner2 from "../img/banner-2.png";
import banner3 from "../img/banner-3.png";
import banner11 from "../img/banner-11.png";
import "../css/slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <div className="slider-body">
            <img src={banner1} alt="" className="banner-background img-fluid" />
            <div className="row banner-content">
              <div className="col-6">
                <img src={banner11} alt="" className="image-on-banner" />
              </div>
              <div className="col-6  banner-text">
                <div className="wrapper">
                  <h2 className="slider-h2 text-orange">
                    MStars Food delivery
                  </h2>
                  <span className="slider-underline"></span>
                  <p className="slider-p">
                    Хосгүй амтыг хормын дотор хүргэж өгнө.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-body">
            <img src={banner2} alt="" className="banner-background img-fluid" />
            <div className="row banner-content">
              <div className="col-6"></div>
              <div className="col-6 banner-text">
                <h2 className="slider-h2">Сэт хоол гарч эхэллээ</h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-body">
            <img src={banner3} alt="" className="banner-background img-fluid" />
            <div className="row banner-content">
              <div className="col-6"></div>
              <div className="col-6 banner-text">
                <h2 className="slider-h2">Тун удахгүй...</h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
