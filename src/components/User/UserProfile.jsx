import { useParams } from "react-router-dom";

const UserProfile = ({ match }) => {
  const { username } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p> {/* Display username from URL parameter */}
    </div>
  );
};

export default UserProfile;
