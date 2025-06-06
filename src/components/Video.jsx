import { IMG_URL } from "../config/constants";

import BookmarkBtn from "./BookmarkBtn";
import PlayButtonWithOverlay from "./PlayButtonWithOverlay";

function Video({ movie }) {
  const mobileSrc = movie.thumbnail.regular.mobile;
  const tabletSrc = movie.thumbnail.regular.medium;
  const desktopSrc = movie.thumbnail.regular.large;

  return (
    <article className="relative">
      <div className="relative">
        <PlayButtonWithOverlay />
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileSrc} />

          <source
            media="(min-width: 768px) and (max-width: 1339px)"
            srcSet={tabletSrc}
          />

          <img
            src={desktopSrc}
            className="w-full rounded-lg mb-100"
            alt={`${movie.title} Thumbnail`}
          />
        </picture>
      </div>

      <ul className="flex flex-wrap space-x-100 text-[0.6875rem] md:text-[0.8125rem]  text-white/75">
        <li>
          <p>{movie.year}</p>
        </li>

        <li className="bullet-point flex items-center">
          <span className="flex items-center space-x-100">
            <img
              src={`${IMG_URL}${
                movie.category === "Movie"
                  ? "/images/icon-category-movie.svg"
                  : "/images/icon-category-tv.svg"
              }`}
              alt=""
            />
            <span>{movie.category}</span>
          </span>
        </li>

        <li className="bullet-point flex items-center">
          <p>{movie.rating}</p>
        </li>

        <li className="w-full mt-100">
          <h3 className="text-sm md:text-lg text-white capitalize font-medium">
            {movie.title}
          </h3>
        </li>
      </ul>

      <BookmarkBtn
        movie={movie}
        topOffset={"top-100 md:top-200"}
        rightOffset={"right-100 md:right-200"}
      />
    </article>
  );
}

export default Video;
