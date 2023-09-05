import apiService from "../services/apiService";
import { useState, useEffect, useMemo } from "react";
import TweetCard from "./TweetCard";

const GetTimeline = () => {
  const [cachedTweets, setCachedTweets] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const fetchTweets = async () => {
    try {
      const response = await apiService.getTimeline();
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

  const handleDelete = (tweetId) => {
    // Delete the tweet from the list
    const updatedTweets = cachedTweets.filter((tweet) => tweet._id !== tweetId);
    setCachedTweets(updatedTweets);

    // Call your API to delete the tweet from the server
    apiService
      .deleteTweet(tweetId)
      .then(() => {
        console.log("Tweet deleted successfully");
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false); // Hide the notification after a short delay
        }, 3000);
      })
      .catch((error) => {
        console.error("Error deleting tweet", error);
      });
  };

  return (
    <div className="get-timeline">
      {showNotification && (
        <div className="fixed inset-x-0 bottom-0">
          <div className="bg-indigo-600 px-4 py-3 text-white">
            <p className="text-center text-sm font-medium">
              Message deleted successfully.
            </p>
          </div>
        </div>
      )}
      {tweets.map((tweet) => (
        <TweetCard key={tweet._id} tweet={tweet} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default GetTimeline;
