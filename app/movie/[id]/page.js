export default function page({ params: { id } }) {
  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5">Your Opinion</h1>

      <div>
        <form>
          <textarea
            name="comment"
            className="w-full border border-teal-500 rounded-lg p-2"
            placeholder="add your comment..."
          ></textarea>
          <input type="text" name="id" value={id} />
          <button
            type="submit"
            className="bg-teal-500 px-4 py-2 rounded-lg text-white"
          >
            Add Comment
          </button>
        </form>

        <div className="mt-5 flex flex-col gap-y-3">
          <div>
            <p>post message</p>
          </div>
        </div>
      </div>
    </div>
  );
}
