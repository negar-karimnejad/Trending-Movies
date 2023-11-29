"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" bg-teal-500 w-40 px-4 py-2 rounded-lg text-white mt-2"
      disabled={pending}
    >
      {pending ? <>Loading...</> : <>Add Comment</>}
    </button>
  );
}
