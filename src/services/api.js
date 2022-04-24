import axios from "axios";

const baseUrl = "https://front-test-api.herokuapp.com/";

export const apiServer = axios.create({
  baseURL: baseUrl,
  timeout: 7000,
});
