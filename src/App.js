import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
        <BellowNavigation />
      </header>
      <main>
        <MovieSegmet title={Horror} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
