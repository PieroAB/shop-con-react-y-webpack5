import React, { useState, useContext } from "react";
import { AppContext } from "@context/AppContext";
const ProductDetail = product => {
  const { id, title, image, description, rating, price } = product;

  const [quantity, setQuantity] = useState(1);

  const {
    initialState: { addToCart },
  } = useContext(AppContext);

  const getInformation = e => {
    setQuantity(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    addToCart(product, Number(quantity));
  };
  return (
    <div className="detail">
      <div className="detail__left">
        <div className="detail__image">
          <img src={image} alt={title} />
        </div>
      </div>

      <div className="detail__right">
        <div className="detail__title">
          <p>{title}</p>
        </div>
        <div className="detail__description">
          <p className="description"> {description}</p>

          <p className="price"> $/{price}</p>
        </div>
        <div className="detail__quantity">
          <select value={quantity} onChange={getInformation}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button onClick={handleClick}>Add to card</button>
        </div>
      </div>
    </div>
  );
};

export { ProductDetail };
