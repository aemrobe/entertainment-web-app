import BookmarkBtn from "./BookmarkBtn";
import { useMovie } from "../Context/MovieContext";
import PlayButtonWithOverlay from "./PlayButtonWithOverlay";
import LazyLoadImage from "./LazyLoadImage";
import { useEffect, useState } from "react";

function TrendingSection() {
  const { movieData } = useMovie();

  return (
    <section className="mt-0.5 ml-200 md:ml-[1.5625rem]  2xl:ml-[10.25rem] ">
      <h2 className="text-xl md:text-[2rem] mb-200 md:mb-300 ">Trending</h2>

      <div className="custom-scrollbar-hide snap-x snap-mandatory rounded-l-lg overflow-x-auto  grid grid-flow-col auto-rows-[8.75rem] auto-cols-[15rem] md:auto-cols-[29.375rem] md:auto-rows-[14.375rem]  gap-x-200 md:gap-x-500  mb-300 md:mb-500">
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
  const mobileBlurSrc = movie.thumbnail.trending.blur_small;
  const largeSrc = movie.thumbnail.trending.large;
  const largeBlurSrc = movie.thumbnail.trending.blur_large;

  const handleStylesForScreenSizes = function (
    styleForSmallScreen,
    styleForLargeScreen
  ) {
    return window.innerWidth < 768 ? styleForSmallScreen : styleForLargeScreen;
  };

  const imageDimensions = {
    mobile: { width: 240, height: 140 },
    large: { width: 470, height: 230 },
  };

  const calculateAspectRatioValue = function (width, height) {
    return width / height;
  };
  const [aspectRatioValue, setAspectRatioValue] = useState(
    handleStylesForScreenSizes(
      calculateAspectRatioValue(
        imageDimensions.mobile.width,
        imageDimensions.mobile.height
      ),
      calculateAspectRatioValue(
        imageDimensions.large.width,
        imageDimensions.large.height
      )
    )
  );
  const [imageSrc, setImageSrc] = useState(
    handleStylesForScreenSizes(mobileSrc, largeSrc)
  );
  const [blurImageSrc, setBlurImageSrc] = useState(
    handleStylesForScreenSizes(mobileBlurSrc, largeBlurSrc)
  );

  useEffect(
    function () {
      const events = ["load", "resize"];

      const handleManipulateSrc = function () {
        const screenWidth = this.window.innerWidth;
        if (screenWidth < 768) {
          setImageSrc(mobileSrc);
          setBlurImageSrc(mobileBlurSrc);
          setAspectRatioValue(
            calculateAspectRatioValue(
              imageDimensions.mobile.width,
              imageDimensions.mobile.height
            )
          );
        } else {
          setAspectRatioValue(
            calculateAspectRatioValue(
              imageDimensions.large.width,
              imageDimensions.large.height
            )
          );
          setImageSrc(largeSrc);
          setBlurImageSrc(largeBlurSrc);
        }
      };

      events.forEach((event) => {
        window.addEventListener(event, handleManipulateSrc);
      });

      return () => {
        window.removeEventListener("load", handleManipulateSrc);
        window.removeEventListener("resize", handleManipulateSrc);
      };
    },
    [
      mobileSrc,
      mobileBlurSrc,
      largeSrc,
      largeBlurSrc,
      imageDimensions.mobile.width,
      imageDimensions.mobile.height,
      imageDimensions.large.width,
      imageDimensions.large.height,
    ]
  );

  return (
    <article className="snap-start relative text-white/75 text-xs md:text-[0.9375rem]">
      <PlayButtonWithOverlay />

      <LazyLoadImage
        className={`object-cover w-full h-full object-center  rounded-lg`}
        brightness="brightness-75"
        aspectRatioValue={aspectRatioValue}
        blurSrc={blurImageSrc}
        src={imageSrc}
        movie={movie}
      />

      <ul className="absolute w-full left-200 md:left-300 bottom-3.5 md:bottom-[1.343rem] flex flex-wrap space-x-100 space-y-100">
        <li>{movie.year}</li>

        <li className="bullet-point flex items-center space-x-100">
          <img
            src={`${
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
