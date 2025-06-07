import { IMG_URL } from "../config/constants";
import BookmarkBtn from "./BookmarkBtn";
import { useMovie } from "../Context/MovieContext";
import PlayButtonWithOverlay from "./PlayButtonWithOverlay";

function TrendingSection() {
  const { movieData } = useMovie();

  return (
    <section className="mt-0.5 ml-200 md:ml-[1.5625rem] ">
      <h2 className="text-xl md:text-[2rem] mb-200 md:mb-300 ">Trending</h2>

      <div className="custom-scrollbar-hide snap-x snap-mandatory rounded-l-lg overflow-x-auto  grid grid-flow-col auto-cols-[15rem] md:auto-cols-[29.375rem] md:auto-rows-[14.375rem]  gap-x-200 md:gap-x-500  mb-300 md:mb-500">
        {movieData.map(
          (movie) =>
            movie.isTrending && (
              <TrendingMovie key={movie.title} movie={movie} />
            )
        )}
      </div>
    </section>
  );
}

function TrendingMovie({ movie }) {
  const mobileSrc = movie.thumbnail.trending.small;
  const largeSrc = movie.thumbnail.trending.large;

  return (
    <article className="snap-start relative text-white/75 text-xs md:text-[0.9375rem]">
      <PlayButtonWithOverlay />

      <picture>
        <source media="(max-width: 767px)" srcSet={IMG_URL + mobileSrc} />

        <img
          src={IMG_URL + largeSrc}
          alt={movie.title + "Thumbnail"}
          className="rounded-lg h-full w-full trending-movie-img brightness-75"
        />
      </picture>

      <ul className="absolute w-full left-200 md:left-300 bottom-3.5 md:bottom-[1.343rem] flex flex-wrap space-x-100 space-y-100">
        <li>{movie.year}</li>

        <li className="bullet-point flex items-center space-x-100">
          <img
            src={`${IMG_URL}${
              movie.category === "Movie"
                ? "/images/icon-category-movie.svg"
                : "/images/icon-category-tv.svg"
            }`}
            alt=""
          />
          <span>{movie.category}</span>
        </li>

        <li className="bullet-point flex items-center ">{movie.rating}</li>

        <li className="w-full">
          <h3 className="font-medium text-[0.9375rem] md:text-2xl text-white ">
            {movie.title}
          </h3>
        </li>
      </ul>
      <BookmarkBtn
        movie={movie}
        topOffset={"top-100 md:top-200"}
        rightOffset={"right-100 md:right-300 "}
      />
    </article>
  );
}

export default TrendingSection;
