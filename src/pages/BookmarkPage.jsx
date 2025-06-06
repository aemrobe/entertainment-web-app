import SearchBox from "../components/SearchBox";
import VideoList from "../components/VideoList";
import { useMovie } from "../Context/MovieContext";

function BookmarkPage() {
  const { movieData, searchQuery } = useMovie();

  const bookmakredVideoesOnly = movieData.filter(
    (movie) => movie.isBookmarked === true
  );

  const searchedMovies =
    searchQuery.length > 0
      ? bookmakredVideoesOnly.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : bookmakredVideoesOnly;

  return (
    <>
      <SearchBox />
      <VideoList title={"Bookmarked Movies"} movieData={searchedMovies} />
    </>
  );
}

export default BookmarkPage;
