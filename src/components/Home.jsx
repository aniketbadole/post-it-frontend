import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import TweetForm from "./TweetForm";
import { useState, useEffect } from "react";
// import UserCard from "./User/UserCard";
import UserList from "./User/UserList";

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
  // const userData = JSON.stringify(responseData);
  // const user = JSON.parse(userData);

  return (
    <div>
      <NavBar />

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-100 break-all">
          <h1>Home</h1>
          {/* <p>{userData}</p>
          <p>{user._id}</p> */}
          {/* <UserCard /> */}
          <UserList />
        </div>
        <div className="h-32 rounded-lg bg-gray-100 lg:col-span-2 break-all">
          <p>{localStorage.getItem("token")}</p>
          {condition ? <p>present</p> : history("/login")}
          <TweetForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
