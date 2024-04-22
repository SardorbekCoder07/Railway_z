import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "jadvallar",
        path: "/tables",
        element: <Tables />,
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
        icon: <ServerStackIcon {...icon} />,
        name: "tizimga kirish",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <GlobeAltIcon {...icon} />,
        name: "Veb-saytga kirish",
        path:' https://themecrafter.com/kyber/elementor/homepage-02/',
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
