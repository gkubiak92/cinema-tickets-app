import { UIActionNames, IToggleSidedrawerAction } from "./types";

export const toggleSideDrawer = (): IToggleSidedrawerAction => ({
  type: UIActionNames.TOGGLE_SIDEDRAWER,
});
