import { useMovie } from "../Context/MovieContext";

function SearchBox() {
  const { searchQuery, setSearchQuery } = useMovie();

  return (
    <div className="  mx-200 md:mx-[1.5625rem] 2xl:ml-[10.25rem] 2xl:mr-9 my-300 md:my-400 2xl:mt-0 2xl:mb-[2.5625rem] flex space-x-200 md:space-x-300 2xl:space-x-400 items-center">
      <label htmlFor="movie-search-input" className="">
        <img
          src={`/images/icon-search.svg`}
          className="w-[1.125rem] md:w-300 h-[1.125rem] md:h-300"
          alt="search icon"
        />
      </label>

      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        name="name of movie or Tv series"
        id="movie-search-input"
        placeholder="Search for movies or TV series"
        className="flex-1 transition-all	  duration-200 border-b-lightBlue  focus:outline-none xl:hover:border-b focus:border-b caret-softRed placeholder:text-white/50 md:text-xl
        placeholder:font-light md:placeholder-text-xl py-[0.562rem]"
      />
    </div>
  );
}

export default SearchBox;
