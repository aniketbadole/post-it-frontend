import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import SideBar from "../Common/SideBar";
import UserProfileContent from "./UserProfileContent";
import BreadCrumb from "./BreadCrumb";

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
      {userData ? (
        <div>
          <div className="flex gap-4">
            <div className="w-1/5 rounded-lg bg-gray-100">
              <SideBar />
            </div>
            <div className="w-3/5 mt-4 break-all">
              <BreadCrumb name={userData.name} />
              <UserProfileContent userData={userData} />
            </div>
            <div className="w-1/5 rounded-lg bg-gray-100"></div>
          </div>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserProfile;
