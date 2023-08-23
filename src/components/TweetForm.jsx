import { useState } from "react";
import apiService from "./services/apiService";

const TweetForm = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleTweetSubmit = async () => {
    try {
      const response = await apiService.postTweet({ content: tweetContent });
      console.log("Tweet posted:", response.data);

      setShowNotification(true); // Show the notification
      setTweetContent("");
      setTimeout(() => {
        setShowNotification(false); // Hide the notification after a short delay
      }, 3000); // Adjust the duration as needed
    } catch (error) {
      console.error("Error posting tweet:", error);
    }
  };

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <textarea
          className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
          placeholder="Enter your tweet..."
        />
        <div className="flex items-center justify-end gap-2 bg-white p-3">
          <button
            onClick={handleTweetSubmit}
            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Post Tweet
          </button>
        </div>
        {showNotification && (
          <div className="fixed inset-x-0 bottom-0">
            <div className="bg-indigo-600 px-4 py-3 text-white">
              <p className="text-center text-sm font-medium">
                Message posted successfully!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetForm;
