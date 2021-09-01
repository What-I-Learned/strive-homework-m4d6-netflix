import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/search";
import ShowDetails from "./components/ShowDetail";
function App() {
  return (
    <Router>
      <div
        style={{ backgroundColor: "#313438", height: "auto" }}
        className="App"
      >
        <Navigation />
        <Search title="fast" />
        <Search title="evil" />
        <Search title="the lord of the rings" />
        <Route component={ShowDetails} path="/details/:ID" />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
