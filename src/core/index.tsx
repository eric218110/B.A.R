import * as React from "react";
import { ThemeState } from "../store/theme/theme.types";
import { ApplicationState } from "../store";
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
import { purple, grey } from '@material-ui/core/colors'

interface CoreProps {
  theme: ThemeState;
}

const Core: React.FC<CoreProps> = ({ theme }) => {

  const [currenteTheme, setCurrentTheme] = React.useState(createMuiTheme(
    {
      palette: {
        type: "light",
        primary: {
          main: purple[500]
        }
      }
    }
  ))

  return (
    <React.Fragment>
      <MuiThemeProvider theme={currenteTheme}>
        <Card elevation={8}>
          <CardContent>
            <Typography>
              Text Example
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant={'contained'} color={'primary'} size={'large'}
              onClick={() => {
                (currenteTheme.palette.type === 'light')
                  ? setCurrentTheme(createMuiTheme({
                    palette: {
                      type: "dark",
                      primary: {
                        main: purple[500]
                      }
                    }
                  }))
                  : setCurrentTheme(createMuiTheme({
                    palette: {
                      type: "light",
                      primary: {
                        main: grey[500]
                      }
                    }
                  }))
              }}
            >{`Theme: ${currenteTheme.palette.type}`}</Button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

const MapStateToProps = (state: ApplicationState) => ({
  theme: state.theme
});

export default connect(MapStateToProps)(Core);
