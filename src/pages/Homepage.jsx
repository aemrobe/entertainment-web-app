import SearchBox from "../components/SearchBox";
import TrendingSection from "../components/TrendingSection";
import VideoList from "../components/VideoList";
import { useMovie } from "../Context/MovieContext";

function Homepage() {
  const { movieData, searchQuery } = useMovie();

  const searchedMovies =
    searchQuery.length > 0
      ? movieData.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : movieData;

  return (
    <>
      <SearchBox />
      {searchQuery.length === 0 && <TrendingSection />}
      <VideoList title={"Recommended for you"} movieData={searchedMovies} />
    </>
  );
}

export default Homepage;
