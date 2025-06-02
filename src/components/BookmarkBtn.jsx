import { IMG_URL } from "../config/constants";

function BookmarkBtn() {
  return (
    <button className="absolute top-100 right-100 px-2.5 py-[9px] bg-black/50 rounded-full ">
      <img
        src={`${IMG_URL}/images/icon-bookmark-empty.svg`}
        alt="Add to bookmark button"
      />
    </button>
  );
}

export default BookmarkBtn;
