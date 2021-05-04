import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicMapPage from "./BasicMapPage";
import ObserverMapPage from "./ObserverMapPage";
import SkipFontMapPage from "./SkipFontMapPage";
import StaticImageMapPage from "./StaticImageMapPage";
import PlaceholderMapPage from "./PlaceholderMapPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/map1">Basic Map</Link>
            </li>
            <li>
              <Link to="/map2">Observer Map</Link>
            </li>
            <li>
              <Link to="/map3">Skip-Font Map</Link>
            </li>
            <li>
              <Link to="/map4">Static Image Map</Link>
            </li>
            <li>
              <Link to="/map5">Placeholder</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/map1">
            <BasicMapPage />
          </Route>
          <Route path="/map2">
            <ObserverMapPage />
          </Route>
          <Route path="/map3">
            <SkipFontMapPage />
          </Route>
          <Route path="/map4">
            <StaticImageMapPage />
          </Route>
          <Route path="/map5">
            <PlaceholderMapPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
