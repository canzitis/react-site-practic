import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logoComoany from "../img/logoCompany.png";
import searchImg from "../img/search.png";
import profileIco from "../img/profile.png";
import loginImg from "../img/log-in.png";
import logoutImg from "../img/log-out.png";
import helloImg from "../img/hello.png";

const Header = (props) => {
  const clikLogoutBtn = () => {
    props.logout();
    setTimeout(() => {
      alert("До встречи!");
    }, 700);
  };

  return (
    <header className={s.header}>
      <h3>CatHub</h3>
      <h5 className={s.helloImg}>
        New Social Network <img src={helloImg} alt="" />
      </h5>
      <img className={s.logoCompany} src={logoComoany} alt="" />
      <img className={s.searchImg} src={searchImg} alt="" />
      <input className={s.search} type="search" placeholder="Search" />
      <div className={s.login}>
        {props.isAuth ? (
          <div className={s.loginInfoUser}>
            <div className={s.userLogin}>
              <img src={profileIco} alt="" />
              {props.login}
            </div>
            <img
              src={logoutImg}
              alt=""
              onClick={clikLogoutBtn}
              className={s.buttonExitLogin}
            />
          </div>
        ) : (
          <NavLink to={"/login"} className={s.buttonLogin}>
            <img src={loginImg} alt="" onClick={props.login} />
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
