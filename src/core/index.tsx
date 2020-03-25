import * as React from "react";
import { ThemeProvider, ThemeOptions } from "@material-ui/core";
import { Routes } from "../routes";
import { ThemeLight, ThemeDark } from "../global/theme";
import { GlobalStyle } from "../global/styles";

function getTheme(): ThemeOptions {
  return true ? ThemeLight : ThemeDark;
}

const Core: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={getTheme()}>
      <Routes />
    </ThemeProvider>
  </React.Fragment>
);

export default Core;
