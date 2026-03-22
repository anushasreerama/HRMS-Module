import axios from "axios";

export const API = axios.create({
  baseURL: "https://hrms-module.onrender.com/", // backend URL
});