import axios from "axios";

export const useApi = () => {
  const baseURL = "https://barwazah.net/api/v1/";

  if(process.client){
    axios.defaults.headers.lang = localStorage.getItem("locale") || "ar";
  }

  return axios.create({
    baseURL,
  });
};