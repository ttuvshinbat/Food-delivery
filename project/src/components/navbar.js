import React, { useState } from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import SearchForm from "./SearchForm";
import {useUser} from "../contexts/UserContext"
const HeaderMenu = () => {
  const [user, setUser]= useUser()
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
  const handleSelect = (e)=>{
    if(e=== "/"){
      setUser(null)
      localStorage.clear()
    }
  }

  return (
    <nav>
      <header className="container">
        <div className="headerMenu">
          <FontAwesomeIcon
            className="toggleButton"
            icon={showMenu ? faChevronLeft : faBars}
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
            <SearchForm />
            <img className="mobileUser" src="/icons/mobileuser.svg" />
            <ul className="userBusket">
              <li className="userBusketList">
                <div className="userBusketElement">
                  <img src="/icons/busketicon.svg" />
                  <a href="">Сагс</a>
                </div>
              </li>
              <li className="userBusketList">
                {user ? (
                  <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle variant="outline-none" id="dropdown-basic">
                    {user.userName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <NavLink to="/userProfile">
                    <Dropdown.Item href="#/action-1">
                    Хэрэглэгчийн мэдээлэл
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                    Миний захиалгууд
                    </Dropdown.Item>
                    <Dropdown.Item href="/">
                    гарах
                    </Dropdown.Item>
                  </NavLink>
                  </Dropdown.Menu>
                  </Dropdown>
                ):( <NavLink to="/login">
                <div className="userBusketElement">
                  <img src="/icons/usericon.svg" />
                  <a href="">Нэвтрэх</a>
                </div>
              </NavLink>)}
               
              </li>
              <li className="userBusketList">
                <NavLink to="/userProfile">
                  <div className="userBusketElement">
                    <img src="/icons/usericon.svg" />
                    <a href="">Хэрэглэгч</a>
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
