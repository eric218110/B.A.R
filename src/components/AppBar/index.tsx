import * as React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import { TollBarStyled, TollBarStyledContainer } from "./styles";

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
          <TollBarStyledContainer>
            <Toolbar variant="dense">
              <TollBarStyled>
                <Typography>Eric Silva</Typography>
              </TollBarStyled>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch size="small" checked={true} onChange={() => {}} />
                  }
                  label="Small"
                />
              </FormGroup>
            </Toolbar>
          </TollBarStyledContainer>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};
