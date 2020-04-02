import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { DashboardPage } from "../pages/Dashboard";
import { AboutPage } from "../pages/About";

export const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="*" component={() => <h1>Page not Found</h1>} />
    </Switch>
  </Router>
);
