import React, { useContext, useRef, useState } from "react";
import logo from "@icons/logo_yard_sale.svg";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import "@styles/Login.scss";
import Helmet from "react-helmet";

const LoginPage = () => {
  const {
    dataUser: { loadData },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const form = useRef(null);

  async function handleClick(e) {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    if (data?.email && data?.password) {
      loadData(data);
      navigate("/");
    } else {
      console.log("Error en data");
    }
  }

  return (
    <>
      <Helmet>
        <title>Log In | React Shop</title>
      </Helmet>

      <div className="login">
        <div className="login__container">
          <Link to="/">
            <img src={logo} alt="logo" className="login__logo" />
          </Link>
          <h1 className="login__title">Log in</h1>
          <form className="login__form" ref={form}>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="yarn@example.com"
              className="input input--email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input--password"
            />
            <button
              onClick={handleClick}
              className="login__button login__button--primary"
            >
              Log In
            </button>
            <Link to="/password-recovery">FORGOT YOUR PASSWORD?</Link>
          </form>

          <Link className="login__button login__button--secondary" to="/singup">
            You do not have an account? SING UP
          </Link>
        </div>
      </div>
    </>
  );
};

export { LoginPage };
