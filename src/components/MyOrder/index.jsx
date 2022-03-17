import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import "@styles/MyOrder.scss";

import { ProductCart } from "@components/ProductCart";

const MyOrder = () => {
  const {
    initialState: { state, clearCart },
  } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.total;
    const sum = state.cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <div className="my-order">
      <div className="my-order__container">
        <h1 className="my-order__title">My orders</h1>
        {state.cart?.length > 1 && (
          <p onClick={clearCart} className="my-order__subTitle">
            Deselect all items
          </p>
        )}

        {state.cart?.length > 0 ? (
          <>
            <div className="my-order__table">
              <p></p>
              <p className="quantity">quantity</p>
              <p></p>
              <p className="price">Price unit</p>
              <p></p>
            </div>
            <div className="my-order__content">
              {state.cart?.map(productItem => (
                <ProductCart
                  productItem={productItem}
                  key={Math.floor(Math.random() * 10000)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-cart">Your cart is empty</div>
        )}

        <div className="orderTotal">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal().toFixed(2)}</p>
        </div>
        <button className="login__button login__button--primary">
          Checkout
        </button>
      </div>
    </div>
  );
};

export { MyOrder };
