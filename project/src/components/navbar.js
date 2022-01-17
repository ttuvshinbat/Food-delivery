import React, { useState } from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Switch } from "react-router-dom";
import CartSidebar from "./CartSidebar";
const HeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  if (showMenu) {
    menu = (
      <div className="dropMenu">
        <div className="dropMenuSection">
          <div className="dropMenuContent" id="dropMenuBorder">
            <div className="dropMenuMinSection">
              <div className="dropMenuImg">
                <img src="/icons/forkandknife.svg" alt="" />
              </div>{" "}
              <NavLink
                className="dropMenuText"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                to="/menu"
              >
                Хоолны цэс
              </NavLink>
            </div>
            <img className="seeMore" src="/icons/seemore.svg" alt="#" />
          </div>
          <div className="dropMenuContent">
            <div className="dropMenuMinSection">
              <div className="dropMenuImg">
                <img src="/icons/map.svg" alt="" />
              </div>
              <NavLink
                className="dropMenuText"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                to="/delivery"
              >
                Хүргэлтийн бүс{" "}
              </NavLink>
            </div>
            <img className="seeMore" src="/icons/seemore.svg" alt="#" />
          </div>
        </div>
        <div className="dropMenuSection">
          <div className="dropMenuContent" id="dropMenuBorder">
            <div className="dropMenuMinSection">
              <div className="dropMenuImg">
                <img src="/icons/rounduser.svg" alt="" />
              </div>
              <a className="dropMenuText">Хэрэглэгчийн мэдээлэл</a>
            </div>
            <img className="seeMore" src="/icons/seemore.svg" alt="#" />
          </div>
          <div className="dropMenuContent">
            <div className="dropMenuMinSection">
              <div className="dropMenuImg">
                <img src="/icons/market.svg" alt="" />
              </div>
              <a className="dropMenuText">Миний захиалга</a>
            </div>
            <img className="seeMore" src="/icons/seemore.svg" alt="#" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav>
      <header className="container">
        <div className="headerMenu">
          <FontAwesomeIcon
            className="toggleButton"
            icon={faBars}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          <div className="logo">
            <NavLink
              className="logoItems"
              onClick={() => {
                setShowMenu(false);
              }}
              exact
              to="/"
            >
              <img className="logoImg" src="/img/img.png" />
              <a className="logoText">Food Delivery</a>
            </NavLink>
          </div>
          <ul className="menu" id="basic-navbar-nav">
            <li>
              <NavLink activeClassName="activeMenuItem" exact to="/">
                НҮҮР
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeMenuItem" to="/menu">
                ХООЛНЫ ЦЭС
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeMenuItem" to="/delivery">
                ХҮРГЭЛТИЙН БҮС
              </NavLink>
            </li>
          </ul>
          <div className="icons">
            <input
              className="searchBox"
              type="text"
              placeholder="&#128269; Хайх"
            />
            <img className="searchIcon" src="/icons/searchicon.svg" />
            <img className="mobileUser" src="/icons/mobileuser.svg" />
            <ul className="userBusket">
              <li className="userBusketList">
                <div className="userBusketElement">
                  {/* <img src="/icons/busketicon.svg" /> */}
                  {/* <a href="">Сагс</a> */}
                  <CartSidebar />
                </div>
              </li>
              <li className="userBusketList">
                <NavLink to="/login">
                  <div className="userBusketElement">
                    <img src="/icons/usericon.svg" />
                    <a href="">Нэвтрэх</a>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {menu}
    </nav>
  );
};
export default HeaderMenu;
