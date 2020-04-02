import { createMuiTheme } from '@material-ui/core';

const colors = {
    primary: '#4a69c5',
    secundary: '#c67fa6',
    error: '#c52b16',
    warning: '#ffb74d',
    info: '#00efff',
    light: {
        background: '#FFFFFF'
    },
    dark: {
        background: '#202324'
    }
}

export const ThemeLight = createMuiTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secundary
        },
        background: {
            default: colors.light.background,
        },
        error: {
            main: colors.error
        },
        warning: {
            main: colors.warning
        },
        info: {
            main: colors.info
        },
    }
});

export const ThemeDark = createMuiTheme({
    palette: {
        primary: {
            main: '#c52b16',
        },
        secondary: {
            main: colors.secundary
        },
        background: {
            default: colors.dark.background,
        },
        error: {
            main: colors.error
        },
        warning: {
            main: colors.warning
        },
        info: {
            main: colors.info
        },
    }
});