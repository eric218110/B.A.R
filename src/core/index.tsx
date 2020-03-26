import * as React from "react";
import { ThemeProvider, ThemeOptions } from "@material-ui/core";
import { Routes } from "../routes";
import { ThemeLight, ThemeDark } from "../global/theme";
import { GlobalStyle } from "../global/styles";
import { ThemeState } from "../store/theme/theme.types";
import { updateTheme } from "../store/theme/theme.action";
import { ApplicationState } from "../store";
import { connect } from "react-redux";
import { THEME } from "../store/theme/theme.enum";

interface CoreProps {
  updateTheme: typeof updateTheme;
  theme: ThemeState;
}

function getTheme(): ThemeOptions {
  return true ? ThemeLight : ThemeDark;
}

class Core extends React.Component<CoreProps> {
  componentDidMount() {
    this.props.updateTheme({
      currentTheme: THEME.DARK,
      id: Math.random()
    });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={getTheme()}>
          <Routes />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

const MapStateToProps = (state: ApplicationState) => ({
  theme: state.theme
});

export default connect(MapStateToProps, { updateTheme })(Core);
