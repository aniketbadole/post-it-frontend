import apiService from "../services/apiService";
import { useState, useEffect, useMemo } from "react";
import TweetCard from "./TweetCard";

const GetTimeline = () => {
  const [cachedTweets, setCachedTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const response = await apiService.getTimeline(); // Adjust the API call accordingly
      setCachedTweets(response.data);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    }
  };

  useEffect(() => {
    // Fetch timeline tweets initially
    fetchTweets();

    // Polling interval every 15 seconds
    const intervalId = setInterval(fetchTweets, 2000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Memoize the cachedTweets array
  const tweets = useMemo(() => cachedTweets, [cachedTweets]);

  return (
    <div className="get-timeline">
      {console.log(tweets)}
      <TweetCard tweets={tweets} /> {/* Pass tweets to TweetCard */}
    </div>
  );
};

export default GetTimeline;
