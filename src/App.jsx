import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import SpinnerFullPage from "./components/SpinnerFullPage";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const Homepage = lazy(() => import("./pages/Homepage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const TvSeriesPage = lazy(() => import("./pages/TvSeriesPage"));
const BookmarkPage = lazy(() => import("./pages/BookmarkPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Wrapper>
            <Header />
            <Main>
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="Movies" element={<MoviesPage />}></Route>
                <Route path="TVSeries" element={<TvSeriesPage />}></Route>
                <Route path="Bookmark" element={<BookmarkPage />}></Route>
              </Routes>
            </Main>
          </Wrapper>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
