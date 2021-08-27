import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieSection from "./components/MovieSection";

import Footer from "./components/Footer";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <div className="App">
      <header></header>
      <SingleMovie />
      <MovieSection />
      <Footer />
    </div>
  );
}

export default App;
