import React from "react";
import {Link} from 'react-router-dom';
import {
    Navbar, MobileNav, Typography, Button, IconButton, Card,
} from "@material-tailwind/react";
import logo from './images/logo.png'

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false),);
    }, []);

    const navList = (<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <a href="#landing_page_hero_home" className="flex items-center">
                <Button variant="text" className={'lg:text-[1rem]'}>
                    <span>Bosh sahifa</span>
                </Button>
            </a>
        </Typography>
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <a href="#landing_page_info" className="flex items-center">
                <Button variant="text" className={'lg:text-[1rem]'}>
                    <span>Tarixi</span>
                </Button>
            </a>
        </Typography>
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <a href="#landing-page-features-info" className="flex items-center">
                <Button variant="text" className={'lg:text-[1rem]'}>
                    <span>Vazifa</span>
                </Button>
            </a>
        </Typography>
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <a href="#landing_page_rahbariyat" className="flex items-center">
                <Button variant="text" className={'lg:text-[1rem]'}>
                    <span>Raxbariyat</span>
                </Button>
            </a>
        </Typography>
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <a href="#landing_page_contact" className="flex items-center">
                <Button variant="text" className={'lg:text-[1rem]'}>
                    <span>Bog'lanish</span>
                </Button>
            </a>
        </Typography>
        <Link to={"/auth/log-in"} className={'lg:hidden'}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal ms-5"
            >
                <a href="#landing_page_contact" className="flex items-center">
                    <Button variant="gradient">
                        <span>Kirish</span>
                    </Button>
                </a>
            </Typography>
        </Link>
    </ul>);
    return (<Navbar className="fixed z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer flex justify-start items-center my-0 py-0 text-blue-500"
            >
                {/*O'ZBEKISTON <br/>*/}
                {/*TEMIR YO'LLARI*/}
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="60" viewBox="0 0 172.000000 135.000000"
                     preserveAspectRatio="xMidYMid meet"
                className={'scale-125'}>
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
                <Typography variant="h6" className={'ms-1.5 mt-1'}>
                    Railway Plan
                </Typography>
                {/*<img src={logo} alt="logo" className={`h-14 scale-150`}/>*/}
            </Typography>
            <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block">{navList}</div>
                {/*<div className="flex items-center gap-x-1">*/}
                {/*    <Button*/}
                {/*        variant="gradient"*/}
                {/*        size="sm"*/}
                {/*        className="hidden lg:inline-block"*/}
                {/*    >*/}
                {/*        <span>Sign in</span>*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>) : (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>)}
                </IconButton>
            </div>
            <Link to={"/auth/log-in"} className={`hidden lg:block`}>
                <Button>Kirish</Button>
            </Link>
        </div>
        <MobileNav open={openNav}>
            {navList}
            {/*<div className="flex items-center gap-x-1">*/}
            {/*    <Button fullWidth variant="text" size="sm" className="">*/}
            {/*        <span>Log In</span>*/}
            {/*    </Button>*/}
            {/*    <Button fullWidth variant="gradient" size="sm" className="">*/}
            {/*        <span>Sign in</span>*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </MobileNav>
    </Navbar>);
};

export default Header;