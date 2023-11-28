"use client";
import { useState } from "react";
import connectToDB from "@/utils/db";
import commentsModel from "@/models/comment";

export default async function page({ params: { id } }) {
  const [body, setBody] = useState("");
  // connectToDB();
  // const comments = await commentsModel.findOne({ id });
  // console.log(comments);

  const submitHandler = async (e) => {
    e.preventDefault();
    // if (!body.trim()) {
    //   return alert("Data is not valid");
    // }
    // const res = await fetch("/api/comments", {
    //   method: "POST",
    //   headers: {},
    //   body: JSON.stringify({ body }),
    // });
    // const data = await res.json();
    // if (res.status === 201) {
    //   setBody("");
    // }
  };

  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5">Your Opinion</h1>

      <div>
        <form onSubmit={submitHandler}>
          <textarea
            name="comment"
            className="w-full border border-teal-500 rounded-lg p-2"
            placeholder="add your comment..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {/* <input type="text" name="id" value={id} /> */}
          <button
            type="submit"
            className="bg-teal-500 px-4 py-2 rounded-lg text-white"
          >
            Add Comment
          </button>
        </form>

        <div className="mt-5 flex flex-col gap-y-3">
          {/* {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.body}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
