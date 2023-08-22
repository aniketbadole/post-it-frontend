import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your backend URL
  timeout: 10000, // Set a reasonable timeout
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  login: (userData) => instance.post("/auth/login", userData),
  register: (userData) => instance.post("/auth/register", userData),
  // Add more functions for other API endpoints
};

export default apiService;
