import { IMG_URL } from "../config/constants";
import BookmarkBtn from "./BookmarkBtn";

function TrendingSection() {
  return (
    <section className=" mt-0.5 ">
      <h2 className="text-xl mb-200 ">Trending</h2>

      <div className=" grid grid-flow-col auto-cols-[15rem]  gap-x-200  mb-300">
        <TrendingMovie />
        <TrendingMovie />
        <TrendingMovie />
      </div>
    </section>
  );
}

function TrendingMovie() {
  return (
    <article className="relative text-white/75 text-xs">
      <div className="absolute w-full h-full rounded-lg"></div>
      <img
        src={`${IMG_URL}/images/thumbnails/beyond-earth/trending/small.jpg`}
        alt="beyond earth thumbnail"
        className="rounded-lg trending-movie-img brightness-75"
      />
      <ul className="absolute w-full left-200 bottom-3.5 flex flex-wrap space-x-100 space-y-100 ">
        <li>2019</li>

        <li className="bullet-point flex items-center space-x-100">
          <img src={`${IMG_URL}/images/icon-category-movie.svg`} alt="" />
          <span>Movie</span>
        </li>

        <li className="bullet-point flex items-center ">PG</li>

        <li className="w-full">
          <h3 className="font-medium text-[0.937rem] text-white ">
            Beyond Earth
          </h3>
        </li>
      </ul>
      <BookmarkBtn />
    </article>
  );
}

export default TrendingSection;
