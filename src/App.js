import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Mainpage from "./componets/main/Mainpage";
import Singepage from "./componets/Singepage";
import Topbar from "./componets/Topbar";

function App() {
  return (
    <Router >
      <Topbar />
      <Switch>
        <Route path="/" exact component={Mainpage} />
        <Route path="/news/:id" component={Singepage} />
      </Switch>


    </Router>
  );
}

export default App;
