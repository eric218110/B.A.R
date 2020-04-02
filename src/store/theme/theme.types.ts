export interface ThemeState {
    darkMode: boolean;
}

// Describing the different ACTION NAMES available
export const TOGGLE_THEME = "@REDUX/THEME/TOGGLE_THEME";

interface SET_TOGGLE_THEME {
    type: typeof TOGGLE_THEME,
    payload: ThemeState;
}

export type ToggleThemeActionTypes = SET_TOGGLE_THEME;