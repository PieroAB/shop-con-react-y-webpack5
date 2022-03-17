import React, { useState } from "react";
import logo from "@icons/logo_yard_sale.svg";
import email from "@icons/email.svg";
import { Link } from "react-router-dom";
import "@styles/RecoveryPassword.scss";
import Helmet from "react-helmet";

const RecoveryPasswordPage = () => {
  const [enabled, setEnabled] = useState(true);

  const EditVisible = () => {
    setEnabled(prev => !prev);
  };
  return (
    <>
      <Helmet>
        <title>Recovery Password | React Shop</title>
      </Helmet>

      <div className="login">
        <div className={`login__container ${!enabled && "novisible"}`}>
          <Link to="/">
            <img src={logo} alt="logo" className="login__logo" />
          </Link>
          <h1 className="login__title">Password recovery</h1>
          <p className="subtitle">
            Inform the email address used to create your account
          </p>
          <form className="login__form">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input type="text" id="email" className="input input--email" />
            <button
              type="button"
              className="login__button login__button--primary"
              onClick={EditVisible}
            >
              SUBMIT
            </button>
            <Link to="/login">BACK TO LOG IN</Link>
          </form>
        </div>

        <div className={`login__container ${enabled && "novisible"}`}>
          <Link to="/">
            <img src={logo} alt="logo" className="login__logo" />
          </Link>
          <h1 className="login__title">Email has been sent!</h1>
          <p className="subtitle">
            Please check your inbox for instructions on how to reset the
            password
          </p>
          <div className="email-image">
            <img src={email} alt="email" />
          </div>
          <Link className="login__button login__button--primary" to="/login">
            LOG IN
          </Link>
          <p className="resend">
            <span>Didn't receive the email?</span>
            <a href="/">&nbsp;&nbsp;RESEND</a>
          </p>
        </div>
      </div>
    </>
  );
};

export { RecoveryPasswordPage };
