import { createMuiTheme } from '@material-ui/core';

const colors = {
    secundary: '#c67fa6',
    error: '#c52b16',
    warning: '#ffb74d',
    info: '#00efff',
    light: {
        background: '#FFFFFF',
        primary: '#506df5'
    },
    dark: {
        background: '#202324',
        primary: '#212121'
    }
}

export const ThemeLight = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: colors.light.primary,
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
        type: 'dark',
        primary: {
            main: colors.dark.primary,
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