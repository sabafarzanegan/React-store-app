import axios from "axios";

const Producturl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: Producturl,
});
