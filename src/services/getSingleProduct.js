import { API_URL } from "@services/settings";
import axios from "axios";

const getSingleProduct = async ({ id }) => {
  const { data } = await axios(`${API_URL}/products/${id}`);

  return data;
};

export { getSingleProduct };
