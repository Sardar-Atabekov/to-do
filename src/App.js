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
          <Route path="/to-do/" exact component={MainPage} />
          <Route path="/to-do/login/" exact component={LoginPage} />
          <Route path="/to-do/create-task/" exact component={CreatePage} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
