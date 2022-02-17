import { BrowserRouter, Route, Switch } from "react-router-dom";
import Grapejs from "./components/Grapejs";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/grapesjs' component={Grapejs} />
    <Route exact path='/home' component={Home} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
