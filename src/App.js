import './App.css';
import Matches from "./components/Matches/Matches";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import Match from "./components/Teams/Match";
import MyPlayers from './components/playing11/MyPlayers';
import Generate from "./components/playing11/Generate";
import AdminRoute from './components/AdminRoute';
import UpdatePoints from './components/points/UpdatePoints';
import UpdatedTeams from './components/points/UpdatedTeams';

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
        <Route path="/adminroute/:id/:team1/:team2">
          <AdminRoute />
        </Route>
        <Route path="/updatepoints/:id">
          <UpdatePoints />
        </Route>
         <Route path="/updatedteams/:id">
          <UpdatedTeams />
         </Route>
      </Switch>
    </Router>
  );
}

export default App;
