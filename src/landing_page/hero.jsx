import { Button, Carousel } from '@material-tailwind/react';
import React from 'react';
import backgroundImage from '../../public/img/bacground/no-image.jpg';

const Hero = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Railway Plan</h1>
                    <p className="text-lg lg:text-xl mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident, eius soluta maiores quam minima consequatur eaque eos quis, assumenda similique ipsum perspiciatis dolorem reprehenderit! Eum natus voluptatem aliquam sapiente.</p>
                    <Button color="blue" size="lg">Learn More</Button>
                </div>
            </div>
            <Carousel transition={{ duration: 2 }} autoplay={true} autoplayInterval={5000} className="rounded-xl h-screen">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    );
}

export default Hero
