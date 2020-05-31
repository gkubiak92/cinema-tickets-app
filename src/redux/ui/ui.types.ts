export const UIActionNames = {
    TOGGLE_SIDEDRAWER: "TOGGLE_SIDEDRAWER"
}

interface IToggleSidedrawerAction {
    type: typeof UIActionNames.TOGGLE_SIDEDRAWER,
    payload?: any
}

export type UIActionTypes = | IToggleSidedrawerAction;

export interface IUIState {
    show: boolean,
}