import Image from "next/image";
import Link from "next/link";

export async function getData(id) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDMxM2M3ZWM3ZTMzZDkyYzE5MzU4OGNlMzk4YTczMSIsInN1YiI6IjY1NjQyZTM2MzY3OWExMDk3NjQ4M2VmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6SaYizpPiX_pc6QeUzxsERHQiQjjvHOdXDRcRBNRRss",
      },
      next: {
        revalidate: 60 * 60 * 24 * 7, //604800  sec = One Week
      },
    }
  );
  return url.json();
}

export default async function Layout({ children, params: { id } }) {
  const data = await getData(id);

  return (
    <div className="min-h-screen p-10">
      <div className="h-[40vh] relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt="Image of movie"
          className="object-cover w-full rounded-lg"
          fill
        />
      </div>
      <h1 className="text-4xl font-bold text-center pt-5">
        {data.original_name}
      </h1>
      <div className="flex gap-x-10 mt-10">
        <div className="w-1/2 font-medium ">
          <h1>
            <span className="underline">Homepage: </span>
            <Link href={`${data.homepage}`} target="_blank">
              Link
            </Link>
          </h1>
          <h1>
            <span className="underline">Original language: </span>
            {data.original_language}
          </h1>
          <p>
            <span className="underline">Overview: </span>
            {data.overview}
          </p>
          <p>
            <span className="underline">Release Date: </span>
            {data.release_date}
          </p>
        </div>
        <div className="w-1/2 font-medium bg-gray-100">{children}</div>
      </div>
    </div>
  );
}
