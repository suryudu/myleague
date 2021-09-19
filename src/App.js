import './App.css';
import Matches from "./components/Matches/Matches";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import Match from "./components/Teams/Match";
import MyPlayers from './components/playing11/MyPlayers';
import Generate from "./components/playing11/Generate";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Matches />
        </Route>
        <Route path="/players/:team1/:team2" render={(props)=>(
          <Match {...props} />
        )} />
        <Route path="/playing11" render={(props)=>(
          <MyPlayers {...props} />
        )} />
        <Route path="/generate/:id" >
          <Generate />
        </Route>
         
      </Switch>
    </Router>
  );
}

export default App;
