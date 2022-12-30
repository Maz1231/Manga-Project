import "./index.css"
import React, { useEffect, useState } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import SignIn from "./SignIn";
import Books from "./pages/Book"
import Authors from "./pages/Author"
import Stores from "./pages/Store"


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("api/me").then((r) => {
    if (r.ok) {
    r.json().then((user) => setUser(user));
        }
      });
    }, []);
    
console.log("***user: ", user)
  return (
    <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
    <main className="homePage">
      {user ? (
        <Switch>
          <Route path="/">
            <SignIn user={user}/>
            <Home user={user}/>
          </Route>
       </Switch>
      ) : (
        <>
        <Switch>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
         </Switch>
        </>
      )}
      <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/stores">
            <Stores />
          </Route>
      </Switch>
    </main> 
    </BrowserRouter>
  );
}

export default App;



