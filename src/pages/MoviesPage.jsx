import SearchBox from "../components/SearchBox";
import VideoList from "../components/VideoList";
import { useMovie } from "../Context/MovieContext";

function MoviesPage() {
  const { movieData, searchQuery } = useMovie();

  const moviesCategoriesOnly = movieData.filter(
    (movie) => movie.category === "Movie"
  );

  const searchedMovies =
    searchQuery.length > 0
      ? moviesCategoriesOnly.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
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
