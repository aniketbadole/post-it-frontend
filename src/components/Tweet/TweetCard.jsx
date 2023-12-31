import jwtDecode from "jwt-decode";
import PropTypes from "prop-types";

const token = localStorage.getItem("token");
const decodedToken = jwtDecode(token);
const userId = decodedToken.user.id;

const TweetCard = ({ tweet, onDelete }) => {
  const handleDelete = () => {
    onDelete(tweet._id);
  };

  return (
    <div>
      <div key={tweet._id} className="tweet">
        <article className="rounded-xl border-2 border-gray-100 bg-white">
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <a href="#" className="block shrink-0">
              <img
                alt="Speaker"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="h-14 w-14 rounded-lg object-cover"
              />
            </a>

            <div>
              <h3 className="font-medium sm:text-lg">
                <a href="#" className="hover:underline">
                  {tweet.author.name}
                </a>
              </h3>

              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                @{tweet.author.username}
              </p>

              <p className="mt-2 line-clamp-2 text-sm text-gray-700">
                {tweet.content}
              </p>

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>

                  <p className="text-xs">{tweet.mentions.length} replies</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>

                  <p className="text-xs">{tweet.retweets.length} reposts</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>

                  <p className="text-xs">{tweet.likes.length} likes</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                  Posted {formatTimestamp(tweet.createdAt)}
                </p>
                {tweet.author._id === userId && (
                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>
                )}
                <div className="flex items-center gap-1 text-gray-500">
                  {tweet.author._id === userId && (
                    <button className="text-xs" onClick={handleDelete}>
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

const formatTimestamp = (timestamp) => {
  const now = new Date();
  const createdAt = new Date(timestamp);
  const timeDiff = now - createdAt;

  if (timeDiff < 3600000) {
    return `${Math.floor(timeDiff / 60000)} minutes ago`;
  } else if (timeDiff < 86400000) {
    return `${Math.floor(timeDiff / 3600000)} hours ago`;
  } else if (createdAt.getFullYear() === now.getFullYear()) {
    return createdAt.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  } else {
    return createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
};

TweetCard.propTypes = {
  tweet: PropTypes.object,
  onDelete: PropTypes.func,
};

export default TweetCard;
