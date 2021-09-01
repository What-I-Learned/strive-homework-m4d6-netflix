import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Search from "./components/search";

function App() {
  return (
    <div style={{ backgroundColor: "#313438", height: "auto" }} className="App">
      <header></header>
      <Navigation />
      <Search title="fast" />
      <Search title="evil" />
      <Search title="the lord of the rings" />

      <Footer />
    </div>
  );
}

export default App;
