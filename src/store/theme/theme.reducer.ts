import { UPDATE_THEME, ThemeState, ThemeActionTypes } from "./theme.types";
import { THEME } from "./theme.enum";

const initialState: ThemeState = {
    currentTheme: THEME.LIGTH,
    id: Math.random(),
};

export function themeReducer(state = initialState, action: ThemeActionTypes): ThemeState {
    switch (action.type) {
        case UPDATE_THEME: {
            action.payload.currentTheme = (action.payload.currentTheme === THEME.LIGTH) 
                ? THEME.DARK
                : THEME.LIGTH
            }
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
