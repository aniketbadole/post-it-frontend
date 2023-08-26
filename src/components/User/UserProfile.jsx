import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import SideBar from "../Common/SideBar";
import Header from "../Common/Header";

const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUserProfile = async (username) => {
    try {
      const response = await apiService.getUserDetailsByUsername(username);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };

  useEffect(() => {
    if (!userData && username) {
      fetchUserProfile(username);
    }
  }, [userData, username]);

  return (
    <div>
      {console.log(userData)}
      {userData ? (
        <div>
          <Header />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-32 rounded-lg bg-gray-100">
              {/* <p>{userData}</p>
          <p>{user._id}</p> */}
              <SideBar />
            </div>
            <div className="break-all">
              {console.log(userData)}
              <b>{userData.name}</b>
              <p>@{userData.username}</p>
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat vel, ea dolorem, voluptates ab quasi veritatis eligendi
                veniam illum facilis illo quidem officiis, cumque eum impedit
                similique nesciunt neque iure.
              </h3>
            </div>
            <div className="h-32 rounded-lg bg-gray-100"></div>
          </div>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserProfile;
