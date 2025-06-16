import { useEffect, useRef, useState } from "react";

function LazyLoadImage({
  src,
  brightness = "",
  className,
  classNameForDiv = "",
  blurSrc,
  movie,
  aspectRatioValue,
}) {
  const style = {
    backgroundImage: `url('${blurSrc}')`,
    aspectRatio: aspectRatioValue,
  };

  const imgRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(
    function () {
      const imgElement = imgRef.current;

      if (!imgElement) return;

      const handleImageLoad = function () {
        setIsLoaded(true);
      };

      if (imgElement.complete) {
        handleImageLoad();
      } else {
        imgElement.addEventListener("load", handleImageLoad);
      }

      return () => {
        if (imgElement) {
          imgElement.removeEventListener("load", handleImageLoad);
        }
      };
    },
    [src]
  );

  // height-[${height}rem]
  return (
    <div
      className={`blur-load  ${classNameForDiv}  ${brightness} ${
        isLoaded ? "loaded" : ""
      } rounded-lg`}
      style={style}
    >
      <img
        ref={imgRef}
        className={className}
        src={`${src}`}
        loading="lazy"
        alt={`${movie.title} Thumnail`}
      />
    </div>
  );
}

export default LazyLoadImage;
