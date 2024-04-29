import PropTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {
    Button,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import {useMaterialTailwindController, setOpenSidenav} from "@/context";

export function Sidenav({routes}) {
    const [controller, dispatch] = useMaterialTailwindController();
    const {sidenavColor, sidenavType, openSidenav} = controller;
    const sidenavTypes = {
        dark: "bg-gradient-to-br from-gray-800 to-gray-900",
        white: "bg-white shadow-sm",
        transparent: "bg-transparent",
    };


    return (
        <aside
            className={`${sidenavTypes[sidenavType]} ${
                openSidenav ? "translate-x-0" : "-translate-x-80"
            } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
        >



            <div className={`relative`}>
            <div>
            <div>
            <Link to="/admin/home" className="py-6 px-8 flex justify-center items-center">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="60pt" height="60pt" viewBox="0 0 172.000000 135.000000"
                         preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                            <path d="M683 1166 c-285 -69 -478 -368 -420 -651 48 -232 217 -403 447 -451
                  181 -38 369 21 505 160 163 165 207 395 119 615 -9 22 -20 41 -25 41 -5 0 -18
                  -18 -29 -39 -16 -31 -18 -46 -10 -66 6 -15 15 -57 21 -94 34 -222 -113 -454
                  -332 -522 -118 -37 -276 -21 -379 39 -195 112 -287 348 -220 563 65 210 282
                  357 496 335 79 -8 163 -37 220 -76 42 -28 48 -29 90 -19 24 6 44 13 44 15 0 3
                  -15 18 -32 34 -43 40 -179 105 -246 119 -69 14 -183 13 -249 -3z"/>
                            <path d="M661 918 c-112 -75 -208 -141 -212 -145 -8 -9 4 -370 14 -379 3 -3
                  98 56 211 132 l206 137 -1 141 c-1 78 -4 166 -8 196 l-6 55 -204 -137z"/>
                            <path d="M1161 974 c-91 -24 -167 -46 -169 -49 -2 -2 18 -15 45 -28 73 -37 89
                  -56 113 -129 12 -38 25 -68 28 -68 7 0 162 303 162 315 0 8 -3 7 -179 -41z"/>
                            <path d="M687 501 l-208 -138 166 -72 c92 -40 173 -70 180 -67 39 14 406 269
                  399 276 -10 9 -311 140 -322 140 -4 0 -101 -62 -215 -139z"/>
                        </g>
                    </svg>
                    <Typography
                        variant="h6"
                        color={sidenavType === "dark" ? "white" : "blue-gray"}>
                        Railway Plan
                    </Typography>
                </Link>
                </div>
                {/* x icon */}
                </div>


                <IconButton
                    variant="text"
                    color={sidenavType === "dark" ? "white" : "blue-gray"}
                    size="sm"
                    ripple={false}
                    className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                    onClick={() => setOpenSidenav(dispatch, false)}
                >
                    <XMarkIcon strokeWidth={2.5} className="h-5 w-5" color={sidenavType === "dark" ? "white" : "blue-gray"}/>
                </IconButton>
                {/* -------------PD brand-------------- */}
                <Typography
                    className="text-center font-semibold text-2xl"
                    color={sidenavType === "dark" ? "white" : "blue-gray"}
                >
                    PD-1
                </Typography>
            </div>
            <div className="m-4">
                {routes.map(({layout, title, pages}, key) => (
                    <ul key={key} className="mb-4 flex flex-col gap-1">
                        {title && (
                            <li className="mx-3.5 mt-4 mb-2">
                                <Typography
                                    variant="small"
                                    color={sidenavType === "dark" ? "white" : "blue-gray"}
                                    className="font-black uppercase opacity-75"
                                >
                                    {title}
                                </Typography>
                            </li>
                        )}
                        {pages.map(({icon, name, path}) => (
                            <li key={name}>
                                <NavLink
                                    onClick={() => {
                                        path === '/log-in' ? sessionStorage.removeItem('jwtTokin') : ''
                                    }}
                                    to={`/${layout}${path}`}>
                                    {({isActive}) => (
                                        <Button
                                            variant={isActive ? "gradient" : "text"}
                                            color={
                                                isActive
                                                    ? sidenavColor
                                                    : sidenavType === "dark"
                                                        ? "white"
                                                        : "blue-gray"
                                            }
                                            className="flex items-center gap-4 px-4 capitalize"
                                            fullWidth
                                        >
                                            {icon}
                                            <Typography
                                                color="inherit"
                                                className="font-medium capitalize"
                                            >
                                                {name}
                                            </Typography>
                                        </Button>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </aside>
    );
}

Sidenav.defaultProps = {
    brandImg: "/img/logo-ct.png",
    brandName: "Material Tailwind React",
};

Sidenav.propTypes = {
    brandImg: PropTypes.string,
    brandName: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
