import "@styles/Detail.scss";
import { ProductDetail } from "@components/ProductDetail";
import { useSingleProduct } from "@hooks/useSingleProduct";
import Helmet from "react-helmet";
import { Navigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  let { id } = useParams();
  const { product, isLoading, isError } = useSingleProduct({ id });

  const title = product ? product.title : " ";
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <div className="loading">Loading Product...</div>
      </>
    );
  }

  if (isError) return <Navigate to="/404" />;

  if (!product) return null;

  return (
    <>
      <Helmet>
        <title> {`${title}`} | React Shop</title>
      </Helmet>

      <ProductDetail {...product} />
    </>
  );
};

export { ProductDetailPage };
