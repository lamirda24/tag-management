import axios from "axios";
import { FetchProduct } from "./index.types";

const apiUrl: string = "https://dummyjson.com";

export const getData: FetchProduct = async (search) => {
  const res = await axios.get(`${apiUrl}/products/search`, {
    params: {
      limit: 10,
      select: "id,title,category",
      ...(search ? { q: search } : null),
    },
  });

  return res.data;
};

export const postData = async (title: string) => {
  const res = await axios.post(`${apiUrl}/products/add`, {
    title,
  });
  return res.data;
};

export const deleteData = async (id: number | string) => {
  const res = await axios.delete(`${apiUrl}/products/${id}`);
  return res.data;
};
