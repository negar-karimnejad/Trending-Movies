export async function fetchMovie(id) {
  try {
    const url = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
  } catch (error) {
    console.log(error);
  }
}
