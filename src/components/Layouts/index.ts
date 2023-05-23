import {Fragment} from "react"
import AdminTheme from "./Admin";
import ClientTheme from "./Client";
import NoLayout from "./NoLayout"


export const Layouts = {
    Admin: AdminTheme,
    Main: ClientTheme,
    Default:NoLayout
  };
export type LayoutKeys = keyof typeof Layouts; // "Main" | "Admin" | "Default"
 