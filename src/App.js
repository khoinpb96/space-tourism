import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

export default function App() {
  const data = require("./data/data.json");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/destination">
          <Destination renderData={data.destinations} />
        </Route>
        <Route path="/crew">
          <Crew renderData={data.crew} />
        </Route>
        <Route path="/technology">
          <Technology renderData={data.technology} />
        </Route>
      </Switch>
    </Router>
  );
}
