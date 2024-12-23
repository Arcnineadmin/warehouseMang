/**
 * sidebarItems - An array of sidebar item objects to render in the sidebar.
 * Each item contains a label, icon, href, tooltip for accessibility, 
 * and a roles array indicating which user roles should see this item.
 */
// sidebarItems.js
import { FaArchive, FaHome, FaUser } from "react-icons/fa";
import NodIcon from "../../public/favicon-nod.ico"
import AsbisIcon from "../../public/favicon-asbis.ico"
import { AiOutlineProduct } from "react-icons/ai";



/**
 * sidebarItems - An array of sidebar item objects to render in the sidebar.
 * Each item contains a label, icon, href, tooltip for accessibility, 
 * and a roles array indicating which user roles should see this item.
 */
export const sidebarItems = [
  {
    label: "Dashboard",
    icon: FaHome,
    href: "/dashboard",
    tooltip: "Home",
    roles: ['admin', 'user']
  },
  {
    label: "Users",
    icon: FaUser,
    href: "/dashboard/users",
    tooltip: "Users",
    roles: ['admin', 'user'],
  },
  {
    label: "NOD Products",
    icon: AiOutlineProduct,
    href: "/dashboard/nod-products",
    tooltip: "NOD Products",
    roles: ['admin', 'user'],
  },
  {
    label: "Abisis Products",
    icon: AiOutlineProduct,
    href: "/dashboard/abisis-products",
    tooltip: "Abisis Products",
    roles: ['admin', 'user'],
  },
  {
    label: "Fetch example",
    icon: FaArchive,
    href: "/dashboard/api-example",
    tooltip: "Example of fetching external data",
    roles: ['admin', 'user'],
  }
];

export default sidebarItems;