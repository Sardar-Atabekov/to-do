import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/404/404";
import MainPage from "./pages/main/main";
import LoginPage from "./pages/login/login";
import Header from "./components/header/header";
import CreatePage from "./pages/create-task/create.jsx";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/Test_To-Do/" exact component={MainPage} />
          <Route path="/Test_To-Do/login/" exact component={LoginPage} />
          <Route path="/Test_To-Do/create-task/" exact component={CreatePage} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
