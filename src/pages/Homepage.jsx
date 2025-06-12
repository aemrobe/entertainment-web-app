import SearchBox from "../components/SearchBox";
import TrendingSection from "../components/TrendingSection";
import VideoList from "../components/VideoList";
import { useMovie } from "../Context/MovieContext";

function Homepage() {
  const { movieData, movieSearchTermFromUrl } = useMovie();

  const searchedMovies =
    movieSearchTermFromUrl.length > 0
      ? movieData.filter((movie) =>
          movie.title
            .toLowerCase()
            .includes(movieSearchTermFromUrl.toLowerCase())
        )
      : movieData;

  return (
    <>
      <SearchBox />
      {movieSearchTermFromUrl.length === 0 && <TrendingSection />}
      <VideoList title={"Recommended for you"} movieData={searchedMovies} />
    </>
  );
}

export default Homepage;
