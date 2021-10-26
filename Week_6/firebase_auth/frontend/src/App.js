/**
 * src/App.js
 */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import BookList from "./BookList";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/book-list"}>
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
