import {Carousel, Typography, Button} from "@material-tailwind/react";
import carousel1 from './images/carousel1.jpg'
import carousel2 from './images/carousel2.jpg'
import carousel3 from './images/carousel3.png'

function HeroHome() {
    return (
        <section id={`landing_page_hero_home`}>
            <Carousel className="h-[100vh]">
                <div className="relative h-full w-full">
                    <img
                        src={carousel1}
                        alt="image 1"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50"></div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src={carousel2}
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/50"></div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src={carousel3}
                        alt="image 3"
                        className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/50"></div>
                </div>
            </Carousel>
        </section>
    );
}

export default HeroHome;
