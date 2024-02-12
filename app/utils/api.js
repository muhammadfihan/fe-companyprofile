import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // replace with your API base URL
});

export const getOverview = async () => {
  const response = await api.get("/photos?_limit=3");
  return response.data;
};
