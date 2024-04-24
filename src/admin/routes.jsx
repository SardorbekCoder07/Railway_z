import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  GlobeAltIcon,
  UsersIcon,
  DocumentDuplicateIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications,Works, Tools } from "@/admin/admin";
import { SignIn, SignUp } from "@/auth";
import { dataMenu } from './admin/dataMenu';

const icon = {
  className: "w-5 h-5 text-inherit",
};
const logout = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>
;
export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "admin",
        path: "/home",
        element: <Home />,
      },
      // sa
      {
        icon: <UsersIcon {...icon} />,
        name: "Hodilmar",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "PK",
        path: "/menuPk",
        element: <dataMenu />,
      },
      {
        icon: <DocumentDuplicateIcon {...icon} />,
        name: "Hisobot",
        path: "/report",
        element: <Works />,
      },
      {
        icon: <WrenchScrewdriverIcon {...icon} />,
        name: "Ish qurollar",
        path: "/tools",
        element: <Tools />,
      },

      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Bildirishnomlar",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <GlobeAltIcon {...icon} />,
        name: "Veb-saytga kirish",
        path:' https://themecrafter.com/kyber/elementor/homepage-02/',
        element: <SignUp />,
      },
      {
        icon: logout,
        name: "Tizimdan Chiqish",
        path: "/log-in",
        element: <SignIn />,
      },

    ],
  },
];

export default routes;
