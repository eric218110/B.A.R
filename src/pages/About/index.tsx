import * as React from "react";
import { Link } from "react-router-dom";

export const AboutPage: React.FC = () => (
  <React.Fragment>
    <h1>About Page</h1>
    <Link to={"/"}>
      <button>Home</button>
    </Link>
    <Link to={"/dashboard"}>
      <button>Dashborad</button>
    </Link>
  </React.Fragment>
);
