import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Common/Header";
import TweetForm from "./TweetForm";
import { useState, useEffect } from "react";
import SideBar from "./Common/SideBar";

const Home = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/users/johndoe",
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
  // const userData = JSON.stringify(responseData);
  // const user = JSON.parse(userData);

  return (
    <div>
      <Header />
      <div className="flex gap-4">
        <div className="w-1/5 h-32 rounded-lg bg-gray-100">
          {/* <p>{userData}</p>
          <p>{user._id}</p> */}
          <SideBar />
        </div>
        <div className="w-3/5 break-all">
          <TweetForm />
          {condition ? <p>present</p> : history("/login")}
          <p>{localStorage.getItem("token")}</p>
        </div>
        <div className="w-1/5 h-32 rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
};

export default Home;
