import { useEffect, useState } from "react";
import BookmarkBtn from "./BookmarkBtn";
import PlayButtonWithOverlay from "./PlayButtonWithOverlay";
import LazyLoadImage from "./LazyLoadImage";

function Video({ movie }) {
  const mobileSrc = movie.thumbnail.regular.small;
  const mobileBlurSrc = movie.thumbnail.regular.blur_small;
  const tabletSrc = movie.thumbnail.regular.medium;
  const tabletBlurSrc = movie.thumbnail.regular.blur_medium;
  const desktopSrc = movie.thumbnail.regular.large;
  const desktopBlurSrc = movie.thumbnail.regular.blur_large;

  const imageDimension = {
    mobile: { width: 164, height: 110 },
    tablet: { width: 220, height: 140 },
    desktop: { width: 280, height: 174 },
  };

  const calculatAspectRatioValue = function (width, height) {
    return width / height;
  };

  const handleStylesForScreenSizes = function (
    styleForSmallScreen,
    styleForMediumScreen,
    styleForLargeScreen
  ) {
    return window.innerWidth < 768
      ? styleForSmallScreen
      : window.innerWidth >= 768 && window.innerWidth < 1440
      ? styleForMediumScreen
      : styleForLargeScreen;
  };

  const [aspectRatioValue, setAspectRatioValue] = useState(
    handleStylesForScreenSizes(
      calculatAspectRatioValue(
        imageDimension.mobile.width,
        imageDimension.mobile.height
      ),
      calculatAspectRatioValue(
        imageDimension.tablet.width,
        imageDimension.tablet.height
      ),
      calculatAspectRatioValue(
        imageDimension.desktop.width,
        imageDimension.desktop.height
      )
    )
  );
  const [imageSrc, setImageSrc] = useState(
    handleStylesForScreenSizes(mobileSrc, tabletSrc, desktopSrc)
  );
  const [blurImageSrc, setBlurImageSrc] = useState(
    handleStylesForScreenSizes(mobileBlurSrc, tabletBlurSrc, desktopBlurSrc)
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
            calculatAspectRatioValue(
              imageDimension.mobile.width,
              imageDimension.mobile.height
            )
          );
        } else if (screenWidth >= 768 && screenWidth < 1440) {
          setImageSrc(tabletSrc);
          setBlurImageSrc(tabletBlurSrc);
          setAspectRatioValue(
            calculatAspectRatioValue(
              imageDimension.tablet.width,
              imageDimension.tablet.height
            )
          );
        } else {
          setImageSrc(desktopSrc);
          setBlurImageSrc(desktopBlurSrc);
          setAspectRatioValue(
            calculatAspectRatioValue(
              imageDimension.desktop.width,
              imageDimension.desktop.height
            )
          );
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
      tabletSrc,
      tabletBlurSrc,
      desktopSrc,
      desktopBlurSrc,
      imageDimension.mobile.width,
      imageDimension.mobile.height,
      imageDimension.tablet.width,
      imageDimension.tablet.height,
      imageDimension.desktop.width,
      imageDimension.desktop.height,
    ]
  );

  return (
    <article className="relative">
      <div className="relative">
        <PlayButtonWithOverlay />

        <LazyLoadImage
          className={`object-cover mb-64  w-full h-full object-center  rounded-lg `}
          classNameForDiv="mb-100"
          aspectRatioValue={aspectRatioValue}
          blurSrc={blurImageSrc}
          src={imageSrc}
          movie={movie}
        />
      </div>

      <ul className="mt-100 flex flex-wrap space-x-100 text-[0.6875rem] md:text-[0.8125rem]  text-white/75">
        <li>
          <p>{movie.year}</p>
        </li>

        <li className="bullet-point flex items-center">
          <span className="flex items-center space-x-100">
            <img
              src={`${
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
