import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Homepage from "./pages/Homepage";

function App() {
  const [movieData, setMovieData] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Homepage movieData={movieData} />
      </Main>
    </>
  );
}

export default App;
