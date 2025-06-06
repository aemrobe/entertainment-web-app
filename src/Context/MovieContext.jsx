import { createContext, useContext, useEffect, useState } from "react";
import movieDataJson from "../assets/data.json";
import { getImageUrl } from "../utils/assetLoader";
const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToBookmark = function (selectedMovieTitle) {
    setMovieData((movieData) =>
      movieData.map((movie) =>
        movie.title === selectedMovieTitle
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    );
  };

  useEffect(function () {
    const processedMovieData = movieDataJson.map(function (movie) {
      const processedThumbnail = {};

      if (movie.thumbnail.trending) {
        processedThumbnail.trending = {
          small: getImageUrl(movie.thumbnail.trending.small),
          large: getImageUrl(movie.thumbnail.trending.large),
        };
      }

      processedThumbnail.regular = {
        small: getImageUrl(movie.thumbnail.regular.small),
        medium: getImageUrl(movie.thumbnail.regular.medium),
        large: getImageUrl(movie.thumbnail.regular.large),
      };

      return {
        ...movie,
        thumbnail: processedThumbnail,
      };
    });

    setMovieData(processedMovieData);
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movieData,
        addToBookmark,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  const context = useContext(MovieContext);

  if (context === undefined)
    throw new Error("you're using context outside of the provider");

  return context;
}

export { MovieProvider, useMovie };
