import SearchBox from "./SearchBox";

function Main({ children }) {
  return (
    <main className="text-white px-200 overflow-x-hidden ">
      <SearchBox />
      {children}
    </main>
  );
}

export default Main;
