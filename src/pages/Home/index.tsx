import * as React from "react";
// import clsx from "clsx";
// import { useTheme } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListComponent from "../../components/List/Home";
// import { drawerStyles } from "./styles";
// import { Menu } from "@material-ui/icons";
// import { IconButton } from "@material-ui/core";
import AppBarComponent from "../../components/AppBar";
import ContentComponent from "../../components/Content/Home";
import DrawerComponent from "../../components/Drawer";

export function HomePage() {
  // const classes = drawerStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      <DrawerComponent />
      <AppBarComponent />
      <ContentComponent />
    </React.Fragment>
  );
}
