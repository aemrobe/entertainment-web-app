function PlayButtonWithOverlay() {
  return (
    <div className="z-10 hidden absolute w-full h-full bg-black/50 rounded-lg  justify-center opacity-0 hover:opacity-100 transition-all duration-200 Witems-center">
      <div className="rounded-[28.5px]  items-center p-[9px] bg-white/25 space-x-200">
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
            fill="#FFF"
          />
        </svg>
        <span className="text-lg leading-tight font-medium">Play</span>
      </div>
    </div>
  );
}

export default PlayButtonWithOverlay;
