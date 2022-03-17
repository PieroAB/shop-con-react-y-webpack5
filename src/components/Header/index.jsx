import React, { useState, useContext } from "react";
import logo from "@icons/logo_yard_sale.svg";
import menu from "@icons/icon_menu.svg";
import carrito from "@icons/icon_shopping_cart.svg";
import user from "@icons/user.svg";
import { Link } from "react-router-dom";
import { Menu } from "@components/Menu";
import { AppContext } from "@context/AppContext";
import { MyOrder } from "@components/MyOrder";
import "@styles/Header.scss";

const Header = () => {
  const [toggleUser, setToggleUser] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const {
    initialState: { state },
    dataUser: { dataUser, clearData },
  } = useContext(AppContext);

  let totalItemCart = state.cart?.reduce(
    (total, cart) => total + cart.quantity,
    0
  );

  const handleToggleUser = () => {
    setToggleCart(false);
    setToggleUser(prev => !prev);
  };

  const handleToggleCart = () => {
    setToggleUser(false);
    setToggleCart(prev => !prev);
  };
  return (
    <nav className="navbar">
      <img src={menu} alt="menu" className="navbar__menu" />
      <div className="navbar__left">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar__logo" />{" "}
        </Link>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/">Clothes</Link>
          </li>
          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/">Furnitures</Link>
          </li>
          <li>
            <Link to="/">Toys</Link>
          </li>
          <li>
            <Link to="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        {dataUser.email ? (
          <div className="navbar__shopping-icon" onClick={handleToggleUser}>
            <img src={user} alt="user" />
          </div>
        ) : (
          <Link className="login__button login__button--tertiary" to="/login">
            Login
          </Link>
        )}

        <div className="navbar__shopping-icon" onClick={handleToggleCart}>
          <img src={carrito} alt="shopping cart" />
          {state.cart?.length > 0 ? <div>{totalItemCart}</div> : null}
        </div>
      </div>
      {toggleUser && dataUser?.email && (
        <Menu email={dataUser.email} clearData={clearData} />
      )}
      {toggleCart && <MyOrder />}
    </nav>
  );
};

export { Header };
