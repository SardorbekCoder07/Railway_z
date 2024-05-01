import React, { useState, useEffect } from 'react';
import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(false);



  const onSign = () => {
    setLoading(true);
    setTimeout(() => {
      document.getElementById('sign').click();
      setLoading(false);
    }, 2000);
  };



  return (
    <div className='flex items-center justify-center mt-16'>

      <Navbar className=" fixed z-20 mx-auto max-w-screen-xl       ">
        <div className=" container mx-auto flex items-center justify-between text-blue-gray-900">
          <div className=''>
            <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
              Railway Plan
            </Typography>
          </div>
           <div className="flex items-center gap-x-1">
      <Link id="sign" to="/auth/log-in">


              <Button
                variant="gradient"
                size="sm"
              >
                <span>Kirish</span>
              </Button>
      </Link>

          </div>

        </div>

      </Navbar>
    </div>
  );
};

export default NavbarComponent;
