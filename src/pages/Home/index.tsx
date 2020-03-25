import * as React from "react";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => (
  <React.Fragment>
    <h1>Home Page</h1>
    <Link to={"/about"}>
      <button>About</button>
    </Link>
    <Link to={"/dashboard"}>
      <button>Dashborad</button>
    </Link>
  </React.Fragment>
);
