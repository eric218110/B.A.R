// Describing the shape of the system's slice of state
export interface ThemeState {
    darkMode: boolean;
}

// Describing the different ACTION NAMES available
export const TOGGLE_THEME = "@REDUX/THEME/TOGGLE_THEME";

interface ToggleThemeAction {
    type: typeof TOGGLE_THEME;
    payload: ThemeState;
}

export type ThemeActionTypes = ToggleThemeAction;