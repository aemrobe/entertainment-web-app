import { IMG_URL } from "../config/constants";

function SearchBox() {
  return (
    <div className="mt-200 mb-300 flex space-x-200 items-center">
      <label htmlFor="movie-search-input" className="">
        <img
          src={`${IMG_URL}/images/icon-search.svg`}
          className="w-[1.125rem] h-[1.125rem]"
          alt="search icon"
        />
      </label>

      <input
        type="search"
        name="name of movie or Tv series"
        id="movie-search-input"
        placeholder="Search for movies or TV series"
        className="flex-1 transition-all	  duration-200 border-b-lightBlue  focus:outline-none hover:border-b focus:border-b caret-softRed placeholder:text-white/50 placeholder:font-light py-[0.562rem]"
      />
    </div>
  );
}

export default SearchBox;
