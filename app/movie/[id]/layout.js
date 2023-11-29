import { fetchMovie } from "@/lib/fetchMovie";
import Image from "next/image";
import Link from "next/link";

export default async function Layout({ children, params: { id } }) {
  const data = await fetchMovie(id);

  return (
    <div className="min-h-screen p-10">
      <div className="h-[40vh] relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
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
            <Link
              href={`${data.homepage ? data.homepage : ""}`}
              target="_blank"
            >
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
