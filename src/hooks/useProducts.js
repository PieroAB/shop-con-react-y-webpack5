import { useEffect, useState } from "react";
import { getProducts } from "@services/getProducts.js";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    getProducts()
      .then(products => {
        setProducts(products);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(err => {
        setIsError(true);
        throw "Error API 404";
      });
  }, []);

  return { products, isLoading, isError };
};

export { useProducts };
