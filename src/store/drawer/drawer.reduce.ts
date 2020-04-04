import { IDrawerState, DrawerActionsTypes, TOGGLE_DRAWER } from './drawer.types';

const initialState: IDrawerState = {
    open: false
}

export function drawerReducer(state: IDrawerState = initialState, action: DrawerActionsTypes): IDrawerState {
    if (action.type === TOGGLE_DRAWER) {
        const { open } = action.payload;
        action.payload.open = !open;
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}