import { useNavigate } from "react-router-dom";
import TweetForm from "./TweetForm";
import SideBar from "./Common/SideBar";
import GetTimeline from "./Tweet/GetTimeline";

const Home = () => {
  const condition = localStorage.getItem("token");
  const history = useNavigate();

  return (
    <div>
      <div className="flex gap-4">
        <div className="w-1/5 rounded-lg bg-gray-100">
          <SideBar />
        </div>
        <div className="w-3/5 mt-4 break-all">
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Home
            </h1>
          </div>
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
