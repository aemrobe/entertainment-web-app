import Video from "./Video";

function VideoList() {
  return (
    <section>
      <h2 className="text-xl leading-tight mb-300">Recommended for you</h2>

      <div className="flex flex-wrap xs:flex-nowrap xs:space-x-200">
        <Video />
        <Video />
      </div>
    </section>
  );
}

export default VideoList;
