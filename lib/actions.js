"use server";

import { revalidatePath } from "next/cache";

export async function postComment(data) {
  const body = data.get("body");
  const id = data.get("id");
  
  try {
    await fetch("http://localhost:3500/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body, movieId: id }),
    });

    revalidatePath("/movie/[id]");
  } catch (error) {
    console.log(error);
  }
}
