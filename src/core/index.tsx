import * as React from "react";
import { ThemeState } from "../store/theme/theme.types";
import { ApplicationState } from "../store";
import { connect } from "react-redux";
import {
  ThemeOptions,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { ThemeLight, ThemeDark } from "../global/theme";
import { GlobalStyle } from "../global/styles";
import { Routes } from "../routes";

interface CoreProps {
  theme: ThemeState;
}

const Core: React.FC<CoreProps> = ({ theme }) => {
  function createThemeProvider() {
    let currenteTheme: ThemeOptions;

    if (theme.darkMode) {
      currenteTheme = ThemeDark;
    } else {
      currenteTheme = ThemeLight;
    }

    return createMuiTheme(currenteTheme);
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <MuiThemeProvider theme={createThemeProvider()}>
        <Routes />
      </MuiThemeProvider>
    </React.Fragment>
  );
};

const MapStateToProps = (state: ApplicationState) => ({
  theme: state.theme,
});

export default connect(MapStateToProps)(Core);
