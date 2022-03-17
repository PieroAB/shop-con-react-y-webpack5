import React, { useContext } from "react";
import close from "@icons/icon_close.png";
import { AppContext } from "@context/AppContext";
import "@styles/MyOrder.scss";
const imageDefault = "https://placeimg.com/640/480/any?r=0.41561173880544056";

const ProductCart = ({ productItem }) => {
  const {
    initialState: { removeFromCart },
  } = useContext(AppContext);

  const { cartItem: product, quantity, total } = productItem;

  const handleRemove = product => {
    removeFromCart(product);
  };
  return (
    <div className="order">
      <figure>
        <img
          src={!product.image ? imageDefault : product.image}
          alt={product.title}
        />
      </figure>

      <p>{quantity}</p>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export { ProductCart };
