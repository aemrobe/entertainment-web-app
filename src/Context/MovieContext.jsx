import { createContext, useContext, useEffect, useState } from "react";
import movieDataJson from "../assets/data.json";
import { useNavigate, useSearchParams } from "react-router-dom";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const movieSearchTermFromUrl = searchParams.get("movie") || "";
  const [movieData, setMovieData] = useState(movieDataJson);
  // State for the immediate input value
  const [searchQuery, setSearchQuery] = useState(movieSearchTermFromUrl);

  const addToBookmark = function (selectedMovieTitle) {
    setMovieData((movieData) =>
      movieData.map((movie) =>
        movie.title === selectedMovieTitle
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    );
  };

  useEffect(
    function () {
      setSearchQuery(movieSearchTermFromUrl);
    },
    [movieSearchTermFromUrl]
  );

  useEffect(function () {}, []);

  const handleSearchMovies = function (e) {
    e.preventDefault();

    const currentPath = window.location.pathname;

    // Only navigate if the debounced term is different from the current URL param
    // This prevents unnecessary navigations when the component first mounts
    // or when the debounced term matches the URL from an external source.
    if (searchQuery !== movieSearchTermFromUrl) {
      if (searchQuery) {
        navigate(`${currentPath}?movie=${encodeURIComponent(searchQuery)}`);
      } else {
        navigate(currentPath);
      }
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movieData,
        movieSearchTermFromUrl,
        addToBookmark,
        handleSearchMovies,
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
