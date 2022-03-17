import React, { useContext } from "react";

import addToCartImage from "@icons/add_to_cart.svg";
import "@styles/ProductItem.scss";
import { AppContext } from "@context/AppContext";
import { Link } from "react-router-dom";
const imageDefault = "https://placeimg.com/640/480/any?r=0.41561173880544056";

const ProductItem = ({ product }) => {
  const {
    initialState: { addToCart },
  } = useContext(AppContext);

  const handleClick = (item, e) => {
    addToCart(item);
  };

  const { id, image, title, price } = product;

  return (
    <div className="product">
      <Link to={`/product/${id}`} onClick={e => e.stopPropagation()}>
        <img src={!image ? imageDefault : image} alt={title} />
        <div className="product__info">
          <div>
            <p>${price}</p>
            <p>{title}</p>
          </div>
          <figure onClick={e => handleClick(product, e)}>
            <img src={addToCartImage} alt="" />
          </figure>
        </div>
      </Link>
    </div>
  );
};

export { ProductItem };
