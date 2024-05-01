import React, { useState, useEffect } from 'react';
import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onSign = () => {
    setLoading(true);
    setTimeout(() => {
      document.getElementById('sign').click();
      setLoading(false);
    }, 2000);
  };

  const navList = (
    <ul className="mt-2 mb-4 text-black flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="a" href="#" className="cursor-pointer py-1.5 font-medium">
        Link 1
      </Typography>
      <Typography as="a" href="#" className="cursor-pointer py-1.5 font-medium">
        Link 2
      </Typography>
      <Typography as="a" href="#" className="cursor-pointer py-1.5 font-medium">
        Link 3
      </Typography>
      {/* Add more list items as needed */}
    </ul>
  );

  return (
    <div>
      <Link id="sign" to="/auth/log-in"></Link>

      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <div>
            <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
              Railway Plan
            </Typography>
          </div>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            {loading ? (
              <span>Loading...</span>
            ) : (
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => onSign()}
              >
                <span>Kirish</span>
              </Button>
            )}
          </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}

            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Kirish</span>
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
