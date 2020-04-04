export interface IDrawerState {
    open: boolean;
}

export const TOGGLE_DRAWER = '@@REDUX/DRAWER/TOGGLE_DRAWER';

interface IActionsDrawer {
    type: typeof TOGGLE_DRAWER;
    payload: IDrawerState;
}

export type DrawerActionsTypes = IActionsDrawer;