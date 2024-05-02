import React from 'https://cdn.skypack.dev/react';

import Header from './header';
import HeroHome from './herohome';
import FeaturesHome from './fauteres';
import FeaturesBlocks from './fatureBlock';
import Footer from './footer';
import Statistics from "@/landing_page/statistics.jsx";
import OurServices from "@/landing_page/our-services.jsx";
import ProjectCard from "@/landing_page/projects.jsx";
import Brands from "@/landing_page/brands.jsx";

function HomePage() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-grow">
                <HeroHome/>
                <Brands />
                <FeaturesHome/>
                <FeaturesBlocks />
                <Statistics/>
                <OurServices />
                <ProjectCard />
            </main>
            <Footer/>
        </div>
    );
}

export default HomePage;