import * as React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
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
import { connect } from "react-redux";

const color = red[50];

interface IAppBarProps {
  updateTheme: typeof updateTheme;
  theme: ThemeState
}

function HideOnScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const AppBarComponent: React.FC<IAppBarProps> = props => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar variant="dense">
            <TollBarStyledContainer>
              <TollBarStyledItems>
                <ListItem dense>
                  <ListItemIcon>
                    <IconButton>
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
                <IconButton onClick={() => {
                  props.updateTheme({ darkMode: props.theme.darkMode })
                }}>
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
      </HideOnScroll>
    </React.Fragment >
  );
};

const MapStateToProps = (state: ApplicationState) => ({
  theme: state.theme
})

export default connect(MapStateToProps, { updateTheme })(AppBarComponent);