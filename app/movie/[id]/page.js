export const dynamic = "force-dynamic";

import AddComment from "@/app/components/AddComment";
import { fetchMovieComments } from "@/lib/fetchMovieComments";

export default async function page({ params: { id } }) {
  const comments = await fetchMovieComments(id);
  comments.reverse();

  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5">Your Opinion</h1>
      <div>
        <AddComment id={id} />
        <div className="mt-5 flex flex-col gap-y-3">
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>🍿{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
