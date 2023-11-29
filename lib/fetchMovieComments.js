export async function fetchMovieComments(id) {
  try {
    const res = await fetch(`http://localhost:3500/comments?movieId=${id}`);

    if (!res.ok) return undefined;

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
