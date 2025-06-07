import { createContext, useContext, useState } from "react";
import movieDataJson from "../assets/data.json";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movieData, setMovieData] = useState(movieDataJson);
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
