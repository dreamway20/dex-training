import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/sidebar/sidebar";
import { NewsBar } from "./components/newsbar/NewsBar";
import { News } from "./components/newsbar/News";

function App() {
  return (
    <Router>
      <div>
        <main className="layout">
          <Sidebar />

          <switch>
            <Route path="/news">
              <NewsBar />
            </Route>
            <Route path="/teams">
              <News />
            </Route>
            <Route path="/players">
              <NewsBar />
            </Route>
          </switch>

          <div className="home">
            <img src="./image 2.png" alt="" width="974px" height="370px" />
            Mexico was treated to a historic farewell on Saturday thanks to the
            country’s first ever overtime thriller that capped off the 2019 NBA
            Mexico City Games. Kelly Oubre’s 3-pointer tied the score at the end
            of regulation, then Patty Mills topped it with his game-winning
            jumper with 0.3 seconds left in the extra period to give San Antonio
            the victory. Here’s a look at the most memorable sights and moments
            from the league’s 30th regular season game in Mexico City.
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
