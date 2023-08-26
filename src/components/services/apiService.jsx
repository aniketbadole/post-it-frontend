import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your backend URL
  timeout: 10000, // Set a reasonable timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios request interceptor for handling headers
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const apiService = {
  login: (userData) => instance.post("/auth/login", userData),
  register: (userData) => instance.post("/auth/register", userData),
  postTweet: (tweetData) => instance.post("/tweets/tweets", tweetData),
  getAllUsers: () => instance.get("/users/users"),
  getUserDetailsByUsername: (username) =>
    instance.get(`/users/users/${username}`),
};

export default apiService;
