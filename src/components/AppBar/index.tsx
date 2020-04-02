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

const color = red[50];

interface IAppBarProps {}

function HideOnScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const AppBarComponent: React.FC<IAppBarProps> = props => {
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
                <IconButton>
                  {true ? (
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
    </React.Fragment>
  );
};
