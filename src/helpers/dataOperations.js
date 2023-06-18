import axios from "axios";

axios.defaults.baseURL = "https://6402478f302b5d671c37899f.mockapi.io/api/v1";

export const fetchData = async () => {
  const resp = await axios.get("/users");
  return resp.data;
};
