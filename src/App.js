import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./App.css";

import MovieSegment from "./components/MovieSegment";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <MovieSegment name={"horror"} />
        <MovieSegment name={"adventure"} />
        <MovieSegment name={"comedy"} />
        <MovieSegment name={"harry potter"} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
