import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

type Anchor = "toggleOpen";

const [open, setopen] = React.useState({ toggleOpen: false });

const toggleDrawer = (anchor: Anchor, open: boolean) => (
  event: React.KeyboardEvent | React.MouseEvent
) => {
  if (
    event.type === "keydown" &&
    ((event as React.KeyboardEvent).key === "Tab" ||
      (event as React.KeyboardEvent).key === "Shift")
  ) {
    return;
  }
  setopen({ toggleOpen: true });
};

export const DrawerComponent: React.FC = () => <h1>Drawer</h1>;
