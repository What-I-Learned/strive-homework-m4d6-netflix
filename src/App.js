import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieSection from "./components/MovieSection";

import Footer from "./components/Footer";
import SingleMovie from "./components/SingleMovie";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <SingleMovie />
      <MovieSection />
      <Footer />
    </div>
  );
}

export default App;
