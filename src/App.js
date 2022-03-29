import "./App.css";
import { Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import { NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import UserDetail from "./components/UserDetail";

function App() {

  return (
    <div>
        <NavLink to='/users'>Users</NavLink>
      <Switch>
         <Route path="/users" exact>
           <UsersList/>
          </Route>
          <Route path="/users/:id" exact>
           <UserDetail/>
          </Route></Switch>
    </div>
  );
}

export default App;
