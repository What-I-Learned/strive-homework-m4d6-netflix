import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./App.css";

import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import NavigationBar from "./components/NavigationBar";
import Series from "./components/Series";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          path="/series"
          exact
          render={(routerProps) => <Series {...routerProps} type={"series"} />}
        />
        <Route component={MovieDetails} path="/details/:movieId" />
      </Router>
    </div>
  );
}

export default App;
