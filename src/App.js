import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import NoMatch from "./component/NoMatch/NoMatch";
import UserDetail from "./component/UserDetail/UserDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/userId/:id">
            <UserDetail/>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
