import * as React from "react";
import { ThemeProvider, ThemeOptions, Button } from "@material-ui/core";
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

function getTheme(theme: THEME): ThemeOptions {
  console.log(theme);
  return (theme === THEME.LIGTH) ? ThemeDark : ThemeLight;

}

class Core extends React.Component<CoreProps> {
    render() {

    const { theme } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={getTheme(theme.currentTheme)}>
          {/* <Routes /> */}
          <button onClick={() => {
            this.props.updateTheme(theme)
          }}>{theme.currentTheme}</button>
          <h6>currentTheme: {theme.currentTheme}</h6>
          <hr></hr>
          <Button variant='outlined' color='primary'>button</Button>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

const MapStateToProps = (state: ApplicationState) => ({
  theme: state.theme
});

export default connect(MapStateToProps, { updateTheme })(Core);
