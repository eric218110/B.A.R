import { createStore, combineReducers, } from "redux";

import { themeReducer } from "./theme/theme.reducer";
import { drawerReducer } from './drawer/drawer.reduce';

const rootReducer = combineReducers({
    theme: themeReducer,
    drawer: drawerReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
);
