import AdminTheme from "./Admin";
import ClientTheme from "./Client";

export const Layouts = {
    Admin: AdminTheme,
    Main: ClientTheme,
  };
  export type LayoutKeys = keyof typeof Layouts; // "Main" | "Admin"
 