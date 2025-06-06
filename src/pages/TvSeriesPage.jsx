import SearchBox from "../components/SearchBox";
import VideoList from "../components/VideoList";
import { useMovie } from "../Context/MovieContext";

function TvSeriesPage() {
  const { movieData, searchQuery } = useMovie();

  const tvSeriesCategoriesOnly = movieData.filter(
    (movie) => movie.category === "TV Series"
  );

  const searchedMovies =
    searchQuery.length > 0
      ? tvSeriesCategoriesOnly.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : tvSeriesCategoriesOnly;

  return (
    <>
      <SearchBox />
      <VideoList title={"TV Series"} movieData={searchedMovies} />
    </>
  );
}

export default TvSeriesPage;
