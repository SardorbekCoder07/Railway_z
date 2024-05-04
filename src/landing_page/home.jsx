import React from 'https://cdn.skypack.dev/react';

import Header from './header';
import HeroHome from './herohome';
import FeaturesHome from './fauteres';
import FeaturesBlocks from './fatureBlock';
import Footer from './footer';
import HorizontalCard from "@/landing_page/rahbariyat.jsx";
import Contact from "@/landing_page/contact.jsx";

function HomePage() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-grow">
                <HeroHome/>
                <FeaturesBlocks />
                <FeaturesHome/>
                <HorizontalCard />
                <Contact />
            </main>
            <Footer/>
        </div>
    );
}

export default HomePage;