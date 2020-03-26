import { THEME } from "./theme.enum";

// Describing the shape of the system's slice of state
export interface ThemeState {
    id: number;
    currentTheme: THEME;
}

// Describing the different ACTION NAMES available
export const UPDATE_THEME = "@REDUX/THEME/UPDATE_THEME";

interface UpdateThemeAction {
    type: typeof UPDATE_THEME;
    payload: ThemeState;
}

export type ThemeActionTypes = UpdateThemeAction;