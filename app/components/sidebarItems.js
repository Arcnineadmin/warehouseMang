/**
 * sidebarItems - An array of sidebar item objects to render in the sidebar.
 * Each item contains a label, icon, href, tooltip for accessibility, 
 * and a roles array indicating which user roles should see this item.
 */
// sidebarItems.js
import { FaArchive, FaHome, FaUser } from "react-icons/fa";
import NodIcon from "../../public/favicon-nod.ico"
import AsbisIcon from "../../public/favicon-asbis.ico"

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
    label: "NOD Webshop",
    icon: () => <img src={NodIcon.src} alt="NOD" className="h-4 w-4" />,
    href: "/dashboard/nod-webshop",
    tooltip: "NOD Webshop",
    roles: ['admin', 'user'],
  },
  {
    label: "Asbis b2b",
    icon: () => <img src={AsbisIcon.src} alt="Asbis" className="h-4 w-4" />,
    href: "/dashboard/asbis-b2b",
    tooltip: "Asbis b2b",
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