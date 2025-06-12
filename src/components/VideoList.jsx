import { useMovie } from "../Context/MovieContext";
import Video from "./Video";

function VideoList({ title, movieData }) {
  const { movieSearchTermFromUrl } = useMovie();

  return (
    <section className="mx-200 md:mx-[1.5625rem] 2xl:ml-[10.25rem] 2xl:mr-9">
      <h2 className="text-xl md:text-[2rem] leading-tight mb-300 2xl:mb-400">
        {movieSearchTermFromUrl.length > 0
          ? `Found ${movieData.length} results for ${movieSearchTermFromUrl}`
          : title}
      </h2>

      <div className="grid  xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-200 md:gap-x-[1.875rem] md:gap-y-300 2xl:gap-x-500">
        {movieData.map((movie) => (
          <Video key={movie.title} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default VideoList;
