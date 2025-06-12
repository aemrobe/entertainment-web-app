import SearchBox from "../components/SearchBox";
import VideoList from "../components/VideoList";
import { useMovie } from "../Context/MovieContext";

function MoviesPage() {
  const { movieData, movieSearchTermFromUrl } = useMovie();

  const moviesCategoriesOnly = movieData.filter(
    (movie) => movie.category === "Movie"
  );

  const searchedMovies =
    movieSearchTermFromUrl.length > 0
      ? moviesCategoriesOnly.filter((movie) =>
          movie.title
            .toLowerCase()
            .includes(movieSearchTermFromUrl.toLowerCase())
        )
      : moviesCategoriesOnly;

  return (
    <>
      <SearchBox />
      <VideoList title={"Movies"} movieData={searchedMovies} />
    </>
  );
}

export default MoviesPage;
