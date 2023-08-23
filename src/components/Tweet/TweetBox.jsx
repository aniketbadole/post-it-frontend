const TweetBox = () => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <textarea
          id="OrderNotes"
          className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
          rows="4"
          placeholder="Enter any additional order notes..."
        ></textarea>

        <div className="flex items-center justify-end gap-2 bg-white p-3">
          <button
            type="button"
            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
