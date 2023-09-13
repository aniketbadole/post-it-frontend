import PropTypes from "prop-types";
import TweetForm from "./TweetForm";
import SideBar from "./Common/SideBar";
import GetTimeline from "./Tweet/GetTimeline";

const Home = ({ userId }) => {
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
          <GetTimeline userId={userId} />
        </div>
        <div className="w-1/5 rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
};

Home.propTypes = {
  userId: PropTypes.string,
};

export default Home;
