import { useEffect, useState } from "react";
import { getSingleProduct } from "@services/getSingleProduct.js";

const useSingleProduct = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const consultarAPi = async () => {
    setIsLoading(true);

    getSingleProduct({ id })
      .then(dataProduct => {
        setProduct(dataProduct);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsError(true);
        throw "Product not found";
      });
  };

  useEffect(() => {
    if (!product) {
      consultarAPi();
    }
  }, [product, id]);

  return { product, isLoading, isError };
};

export { useSingleProduct };
