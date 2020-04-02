import { createStore, combineReducers, } from "redux";

import { themeReducer } from "./theme/theme.reducer";

const rootReducer = combineReducers({
    theme: themeReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
);
