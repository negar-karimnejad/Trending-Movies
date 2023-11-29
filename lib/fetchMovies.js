export async function fetchMovies() {
  const url = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    {
      headers: {
        accept: "application/json",
        Authorization: process.env.THEMOVIEDATABASE_API,
      },
      next: {
        revalidate: 60 * 60 * 24 * 7, //604800  sec = One Week
      },
    }
  );
  return url.json();
}
