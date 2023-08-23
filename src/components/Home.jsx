import axios from "axios";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

const Home = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/users/aniket",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setResponseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <p>{JSON.stringify(responseData)}</p>
    </div>
  );
};

export default Home;
