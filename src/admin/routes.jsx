import {
  HomeIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { Home, Hisobot } from "@/admin/admin";
import { SignIn, SignUp } from "@/auth";

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
        name: "Boshqaruv Paneli",
        path: "/boshqaruv-paneli",
        element: <Home />,
      },
      {
        icon: <DocumentCheckIcon {...icon} />,
        name: "Hisobot",
        path: "/hisobot",
        element: <Hisobot />,
      },
      // sa
 
    ],
  },
  {
    layout: "auth",
    pages: [

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
