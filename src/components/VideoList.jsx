import { useMovie } from "../Context/MovieContext";
import Video from "./Video";

function VideoList({ title, movieData }) {
  const { searchQuery } = useMovie();

  return (
    <section className="mx-200 md:mx-[1.5625rem]">
      <h2 className="text-xl md:text-[2rem] leading-tight mb-300">
        {searchQuery.length > 0
          ? `Found ${movieData.length} results for ${searchQuery}`
          : title}
      </h2>

      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-200 md:gap-x-[1.875rem] md:gap-y-300">
        {movieData.map((movie) => (
          <Video key={movie.title} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default VideoList;
