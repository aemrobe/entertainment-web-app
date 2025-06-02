import { IMG_URL } from "../config/constants";
import BookmarkBtn from "./BookmarkBtn";

function Video() {
  return (
    <article className="relative w-full xs:w-1/2">
      <img
        src={`${IMG_URL}/images/thumbnails/the-great-lands/regular/small.jpg`}
        alt="movie thumbnail"
        className="w-full rounded-lg mb-100"
      />

      <ul className="flex flex-wrap space-x-100 text-[0.6875rem] text-white/75">
        <li>
          <p>2019</p>
        </li>

        <li className="bullet-point flex items-center">
          <span className="flex items-center space-x-100">
            <img src={`${IMG_URL}/images/icon-category-movie.svg`} alt="" />
            <span>Movie</span>
          </span>
        </li>

        <li className="bullet-point flex items-center">
          <p>PG</p>
        </li>

        <li className="w-full mt-100">
          <h3 className="text-sm text-white capitalize font-medium">
            The Great Lands
          </h3>
        </li>
      </ul>

      <BookmarkBtn />
    </article>
  );
}

export default Video;
