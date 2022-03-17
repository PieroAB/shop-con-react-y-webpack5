import { API_URL } from "@services/settings";
import axios from "axios";

const getProducts = async () => {
  const { data } = await axios(`${API_URL}/products`);
  return data;
};

export { getProducts };
