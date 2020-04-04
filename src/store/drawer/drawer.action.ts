import { IDrawerState, TOGGLE_DRAWER } from './drawer.types';

export function toggle_drawer(drawer: IDrawerState) {
    return {
        type: TOGGLE_DRAWER,
        payload: drawer
    };
}