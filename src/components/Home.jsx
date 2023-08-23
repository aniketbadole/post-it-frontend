import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import TweetForm from "./TweetForm";
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

  const condition = localStorage.getItem("token");
  const history = useNavigate();

  return (
    <div>
      <NavBar />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-100">
          <h1>Home</h1>
        </div>
        <div className="h-32 rounded-lg bg-gray-100 lg:col-span-2 break-all">
          <p>{localStorage.getItem("token")}</p>
          {condition ? <p>present</p> : history("/login")}
          <p>{JSON.stringify(responseData)}</p>
          <TweetForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
