import * as React from "react";
import { ThemeState } from "../store/theme/theme.types";
import { toggle_theme } from "../store/theme/theme.action";
import { ApplicationState } from "../store";
import { connect } from "react-redux";
import { ThemeDark, ThemeLight } from "../global/theme";
import {
  ThemeOptions,
  createMuiTheme,
  MuiThemeProvider,
  Button
} from "@material-ui/core";
interface ICoreProps {
  toggle_theme: typeof toggle_theme;
  theme: ThemeState;
}

const CoreApplication: React.FC<ICoreProps> = (props: ICoreProps) => {
  function getThemeProvider(): ThemeOptions {
    let currentTheme: ThemeOptions;
    const { darkMode } = props.theme;
    if (darkMode) {
      currentTheme = ThemeDark;
    } else {
      currentTheme = ThemeLight;
    }
    return createMuiTheme(currentTheme);
  }

  return (
    <React.Fragment>
      <MuiThemeProvider theme={getThemeProvider()}>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={() => {
            toggle_theme(props.theme.darkMode);
          }}
        >
          {props.theme.darkMode ? "DARK" : "LIGHT"}
        </Button>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

const MapStateToPros = (state: ApplicationState) => ({
  theme: state.theme
});

export default connect(MapStateToPros, { toggle_theme })(CoreApplication);
