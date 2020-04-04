import * as React from "react";
import { Drawer, IconButton, Divider, List, ListItem } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { Container } from "./styles";

const DrawerComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Drawer variant={"permanent"} anchor={"left"}>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <Divider />
          <List>
            <ListItem>ERIC</ListItem>
          </List>
        </Drawer>
      </Container>
    </React.Fragment>
  );
};

export default DrawerComponent;
