const UserProfileContent = ({ userData }) => {
  const {
    username,
    name,
    following,
    followers,
    joiningDate,
    bio,
    profilePicture,
  } = userData;

  const joinDate = new Date(joiningDate);
  const formattedJoinDate = `${joinDate.toLocaleString("default", {
    month: "long",
  })} ${joinDate.getFullYear()}`;

  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 break-all">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{name}</h3>

          <p className="mt-1 text-xs font-medium text-gray-600">@{username}</p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt="Paul Clapton"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">{bio}</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">
            {followers.length}
          </dt>
          <dd className="text-xs text-gray-500">Followers</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">
            {following.length}
          </dt>
          <dd className="text-xs text-gray-500">Following</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">
            {formattedJoinDate}
          </dt>
          <dd className="text-xs text-gray-500">Joined</dd>
        </div>
      </dl>
    </div>
  );
};

export default UserProfileContent;
