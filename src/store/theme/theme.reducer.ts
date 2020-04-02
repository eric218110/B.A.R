import {
    ThemeState,
    ToggleThemeActionTypes,
    TOGGLE_THEME
} from "./theme.types";

const initialState: ThemeState = {
    darkMode: false,
};

export function themeReducer(state = initialState, action: ToggleThemeActionTypes): ThemeState {
    console.log(action)
    if (action.type === TOGGLE_THEME) {
        const { darkMode } = action.payload
        action.payload.darkMode = !darkMode;

        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
