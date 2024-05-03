import React from "react";
import { Link } from 'react-router-dom';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import logo from './images/logo.png'

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
        </ul>
    );
    return (
        <Navbar className="fixed z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer font-bold text-[1.4rem] leading-[25px] text-blue-500"
                >
                    O'ZBEKISTON <br/>
                    TEMIR YO'LLARI
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
                        {openNav ? (
                            <svg
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
                            </svg>
                        ) : (
                            <svg
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
                            </svg>
                        )}
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
        </Navbar>
    );
};

export default Header;