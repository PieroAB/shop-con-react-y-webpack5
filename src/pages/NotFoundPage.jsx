import { NotFound404 } from "@components/NotFound404";
import Helmet from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found | React Shop</title>
      </Helmet>
      <NotFound404 />
    </>
  );
};

export { NotFoundPage };
