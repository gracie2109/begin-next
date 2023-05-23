import AdminTheme from "./Admin";
import ClientTheme from "./Client";
import AuthTheme from "./Auth";
export const Layouts = {
    Admin: AdminTheme,
    Main: ClientTheme,
    Auth:AuthTheme
  };
export type LayoutKeys = keyof typeof Layouts;
 