import * as React from "react";
import { ThemeState } from "../store/theme/theme.types";
import { ApplicationState } from "../store";
import { updateTheme } from '../store/theme/theme.action';
import { connect } from "react-redux";
import {
  Card, CardContent,
  Typography,
  CardActions,
  Button,
  ThemeOptions,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { ThemeLight, ThemeDark } from "../global/theme";

interface CoreProps {
  updateTheme: typeof updateTheme;
  theme: ThemeState;
}

const Core: React.FC<CoreProps> = ({ theme, updateTheme }) => {

  function createThemeProvider() {
    let currenteTheme: ThemeOptions

    if (theme.darkMode) {
      currenteTheme = ThemeLight
    } else {
      currenteTheme = ThemeDark
    }

    return createMuiTheme(currenteTheme);
  }

  return (
    <React.Fragment>
      <MuiThemeProvider theme={createThemeProvider()}>
        <Card elevation={8}>
          <CardContent>
            <Typography>
              Text Example
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant={'contained'} color={'primary'} size={'large'}
              onClick={() => {
                updateTheme({ darkMode: theme.darkMode })
                console.log(theme)
              }}
            >{`Theme: ${(theme.darkMode) ? 'LIGTH' : 'DARK'}`}</Button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

const MapStateToProps = (state: ApplicationState) => ({
  theme: state.theme
});

export default connect(MapStateToProps, { updateTheme })(Core);