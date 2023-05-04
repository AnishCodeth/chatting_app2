import axios from "axios";

const port_no=3213

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:"+port_no+"/api" : "/api",
  withCredentials: true,
});
