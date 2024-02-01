import axios from "axios";

const request = axios.create({
  baseURL: "https://portfolio-backend-api-2j8r.onrender.com/",
});

export default request;
