import { useProducts } from "@hooks/useProducts";
import { ProductItem } from "@components/ProductItem";
import "@styles/ProductList.scss";

import Helmet from "react-helmet";
import logo from "@icons/logo_yard_sale.svg";
import { Link, Navigate } from "react-router-dom";

const HomePage = () => {
  const { products, isError, isLoading } = useProducts();

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <div className="loading">Loading products...</div>
      </>
    );

  if (isError) return <Navigate to="/404" />;
  return (
    <>
      <Helmet>
        <title>Home | React Shop</title>
      </Helmet>
      <div className="home">
        <div className="home__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <section className="home__container">
          <div className="ProductList">
            {products.map(product => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export { HomePage };
