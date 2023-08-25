import { useState, useEffect } from "react";

import apiService from "../services/apiService";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiService.getAllUsers();
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user._id}
          id={user._id}
          username={user.username}
          name={user.name}
          profilePicture={user.profilePicture}
        />
      ))}
    </div>
  );
};

export default UserList;
