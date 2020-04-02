import { ThemeState, TOGGLE_THEME } from "./theme.types";

export function updateTheme(theme: ThemeState) {
    return {
        type: TOGGLE_THEME,
        payload: theme
    };
}
