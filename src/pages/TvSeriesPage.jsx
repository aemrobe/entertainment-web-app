import SearchBox from "../components/SearchBox";
import VideoList from "../components/VideoList";
import { useMovie } from "../Context/MovieContext";

function TvSeriesPage() {
  const { movieData, movieSearchTermFromUrl } = useMovie();

  const tvSeriesCategoriesOnly = movieData.filter(
    (movie) => movie.category === "TV Series"
  );

  const searchedMovies =
    movieSearchTermFromUrl.length > 0
      ? tvSeriesCategoriesOnly.filter((movie) =>
          movie.title
            .toLowerCase()
            .includes(movieSearchTermFromUrl.toLowerCase())
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
