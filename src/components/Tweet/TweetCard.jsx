const TweetCard = (tweets) => {
  const response = tweets.tweets;
  return (
    <div>
      {console.log(tweets)}
      {response.map((tweet) => (
        <div key={tweet._id} className="tweet">
          <p>{tweet.content}</p>
          {/* ... other tweet details */}
        </div>
      ))}
    </div>
  );
};

export default TweetCard;
