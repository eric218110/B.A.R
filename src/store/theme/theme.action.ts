import { ThemeState, UPDATE_THEME } from "./theme.types";

export function updateTheme(newTheme: ThemeState) {
    return {
        type: UPDATE_THEME,
        payload: newTheme
    };
}
