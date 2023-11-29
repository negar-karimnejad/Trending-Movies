import { postComment } from "@/lib/actions";
import SubmitButton from "./SubmitButton";

export default function AddComment({ id }) {
  return (
    <form action={postComment}>
      <textarea
        name="body"
        className="w-full border border-teal-500 rounded-lg p-2"
        placeholder="add your comment..."
      ></textarea>
      <input type="text" name="id" value={id} className="opacity-0 w-0" />
      <SubmitButton />
    </form>
  );
}
