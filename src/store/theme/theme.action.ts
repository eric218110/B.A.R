import {
    TOGGLE_THEME,
    ToggleThemeActionTypes

} from "./theme.types";

export function toggle_theme(dark: boolean): ToggleThemeActionTypes {
    const darkMode = !dark;
    return {
        type: TOGGLE_THEME,
        payload: { darkMode }
    }
}