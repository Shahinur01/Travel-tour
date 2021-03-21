import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "../src/HeaderNav/HeaderNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Home/Home";
import Login from "../src/Login/Login";
import SelectRoute from "../src/SelectRouter/SelectRouter";
import { createContext, useState } from "react";
import AuthRoute from "../src/AuthRouth/AuthRoute";
import Blog from "../src/UpComming/Blog";
import Destination from "../src/UpComming/Destination";
import Contact from "../src/UpComming/Contact";


export const UserContext = createContext({})

function App() {
  const [LoggedInUserInfo, setLoggedInUserInfo] = useState();
 
  return (
    <UserContext.Provider value={[ LoggedInUserInfo, setLoggedInUserInfo ]}>
      <Router>
        <HeaderNav></HeaderNav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <AuthRoute path="/select-route/:category">
            <SelectRoute />
          </AuthRoute>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          
          <Route path="/destination">
            <Destination />
          </Route>
          

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
