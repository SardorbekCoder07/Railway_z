import React from 'https://cdn.skypack.dev/react';

import Header from './header';
import HeroHome from './herohome';
import FeaturesHome from './fauteres';
import FeaturesBlocks from './fatureBlock';
import Testimonials from './testmonotion';
import Newsletter from './Nwesletter';
import Footer from './footer';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default HomePage;