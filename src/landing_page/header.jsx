import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex items-center  mr-4">
            {/* Logo */}
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
                  <p className='text-xl'>Railway Plan</p>
           </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
               </li>
               <Link to={"/auth/log-in"} >

              <li className='flex items-center bg-black text-white p-2 rounded-lg cursor-pointer'>
                   <span>Kirish</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
               </li>
               </Link>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
