import * as React from "react";
import { DrawerComponent } from "../../components/Drawer";
import { AppBarComponent } from "../../components/AppBar";
import { Container } from "./styles";

export const HomePage: React.FC = () => (
  <React.Fragment>
    <AppBarComponent />
    <Container>
      <DrawerComponent />
    </Container>
  </React.Fragment>
);
