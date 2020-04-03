import { TOGGLE_THEME, ThemeState, ThemeActionTypes } from "./theme.types";

const initialState: ThemeState = {
    darkMode: false
};

export function themeReducer(state = initialState, action: ThemeActionTypes): ThemeState {
    if (action.type === TOGGLE_THEME) {
        const { darkMode } = action.payload;
        action.payload.darkMode = !darkMode;

        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}