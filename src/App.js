import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/Footer";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <SingleMovie />
      </main>
      <Footer />
    </div>
  );
}

export default App;
