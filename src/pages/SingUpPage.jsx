import logo from "@icons/logo_yard_sale.svg";
import { Link } from "react-router-dom";
import "@styles/SingUp.scss";
import Helmet from "react-helmet";

const SingUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | React Shop</title>
      </Helmet>

      <div className="login">
        <div className="login__container">
          <Link to="/">
            <img src={logo} alt="logo" className="login__logo" />
          </Link>
          <h1 className="login__title">Sign up</h1>

          <p className="login__toLogin">
            Already have a account?
            <Link className="" to="/login">
              &nbsp;&nbsp;Log In
            </Link>
          </p>
          <br></br>

          <form action="/" className="login__form">
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Teff"
                className="input input--name"
              />
            </div>
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="yarn@example.com"
                className="input "
              />
            </div>
            <div>
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input input--password"
              />
            </div>
            <p className="login__terms">
              By clicking on "Sign up", you accept the TERMS AND CONDITIONS OF
              USE and the PRIVACY POLICY
            </p>
            <button
              type="submit"
              className="login__button login__button--primary"
            >
              SING UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export { SingUpPage };
