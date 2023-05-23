import axios, { CancelTokenSource } from "axios";
import { Storage } from "../shared/utility";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000/",
  baseURL: "http://192.168.0.119:4000/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = Storage.get("access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(config.url);

  const cancelTokenSource = axios.CancelToken.source();
  config.cancelToken = cancelTokenSource.token;
  return config;
});
