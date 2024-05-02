import {Carousel, Typography, Button} from "@material-tailwind/react";

function HeroHome() {
    return (
        <section id={`landing_page_hero_home`}>
            <Carousel className="h-[100vh]">
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                One Lorem ipsum dolor.
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti facilis inventore
                                perferendis quod vel?
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Click
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                Two Lorem ipsum dolor sit amet.
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Two Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, praesentium.
                            </Typography>
                            <div className="flex gap-2">
                                <Button size="lg" color="white">
                                    Click
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                Tree Lorem ipsum dolor sit amet.
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Tree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil.
                            </Typography>
                            <div className="flex gap-2">
                                <Button size="lg" color="white">
                                    Click
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}

export default HeroHome;
