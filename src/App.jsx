import Header from "./components/Header";
import Main from "./components/Main";
import MoviesPage from "./pages/MoviesPage";
import TvSeriesPage from "./pages/TvSeriesPage";
import BookmarkPage from "./pages/BookmarkPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter basename="/entertainment-web-app">
        <div className="border-2 border-lime-500 2xl:flex 2xl:container 2xl:max-w-[90rem] 2xl:mx-auto md:px-[1.5625rem] 2xl:px-[0rem] md:pt-[23px]">
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="Movies" element={<MoviesPage />}></Route>
              <Route path="TVSeries" element={<TvSeriesPage />}></Route>
              <Route path="Bookmark" element={<BookmarkPage />}></Route>
            </Routes>
          </Main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
