import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { GitHub, Brightness4, Brightness5, Menu } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import { TollBarStyledContainer, TollBarStyledItems } from "./styles";
import { updateTheme } from "../../store/theme/theme.action";
import { ThemeState } from "../../store/theme/theme.types";
import { ApplicationState } from "../../store";
import { toggle_drawer } from "../../store/drawer/drawer.action";
import { IDrawerState } from "../../store/drawer/drawer.types";
import { connect } from "react-redux";

const color = red[50];

interface IAppBarProps {
  toggle_drawer: typeof toggle_drawer;
  drawer: IDrawerState;
  updateTheme: typeof updateTheme;
  theme: ThemeState;
}

const AppBarComponent: React.FC<IAppBarProps> = props => {
  return (
    <React.Fragment>
      <AppBar position="fixed" color={"primary"}>
        <Toolbar variant="dense">
          <TollBarStyledContainer>
            <TollBarStyledItems>
              <ListItem dense>
                <ListItemIcon>
                  <IconButton
                    onClick={() => {
                      console.log(props.drawer);
                    }}
                  >
                    <Menu style={{ color }} fontSize={"small"} />
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary="Template" />
              </ListItem>
            </TollBarStyledItems>
            <TollBarStyledItems>
              <IconButton>
                <GitHub style={{ color }} fontSize={"small"} />
              </IconButton>
              <IconButton
                onClick={() => {
                  props.updateTheme({ darkMode: props.theme.darkMode });
                }}
              >
                {props.theme.darkMode ? (
                  <Brightness4 style={{ color }} />
                ) : (
                  <Brightness5 style={{ color }} />
                )}
              </IconButton>
            </TollBarStyledItems>
          </TollBarStyledContainer>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const MapStateToProps = (state: ApplicationState) => ({
  theme: state.theme,
  drawer: state.drawer
});

export default connect(MapStateToProps, { updateTheme, toggle_drawer })(
  AppBarComponent
);
