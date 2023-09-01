import { useNavigate } from "react-router-dom";
import Header from "./Common/Header";
import TweetForm from "./TweetForm";
import SideBar from "./Common/SideBar";
import GetTimeline from "./Tweet/GetTimeline";
import jwtDecode from "jwt-decode";

const Home = () => {
  const condition = localStorage.getItem("token");
  const history = useNavigate();
  const decodedToken = jwtDecode(condition);
  const loggedInUserId = decodedToken.user.id;
  console.log(loggedInUserId);

  return (
    <div>
      <Header />
      <div className="flex gap-4">
        <div className="w-1/5 rounded-lg bg-gray-100">
          <SideBar />
        </div>
        <div className="w-3/5 mt-4 break-all">
          <TweetForm />
          {condition ? <div className="mb-4"></div> : history("/login")}
          <GetTimeline />
        </div>
        <div className="w-1/5 rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
};

export default Home;
