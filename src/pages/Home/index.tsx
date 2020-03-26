import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AppBarComponent } from "../../components/AppBar";
import { Container } from "./styles";

export const HomePage: React.FC = () => (
  <React.Fragment>
    <AppBarComponent />
    <Container>
      <Link to={"/about"}>
        <Button variant="contained" color="primary">
          About
        </Button>
      </Link>
      <Link to={"/dashboard"}>
        <Button variant="contained" color="secondary">
          Dashborad
        </Button>
      </Link>
    </Container>
  </React.Fragment>
);
