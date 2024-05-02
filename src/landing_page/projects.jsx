import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar, Button,
} from "@material-tailwind/react";
import React from "react";

const ProjectCard = () => {
    return (
        <section id={`landing_page_project`} className={`bg-[#F5F5F5] py-16`}>
            <div className="container mx-auto px-5 sm:px-0">
                <div className={`my-10 w-full`}>
                    <h1 className={`text-[#FD972E] text-[1.5rem] h2`}>Recent Portfolio</h1>
                    <div className={`flex justify-between items-start flex-wrap md:flex-nowrap`}>
                        <p className="text-xl text-black opacity-70 text-[1.7rem] md:text-[2.5rem] leading-7 md:leading-10 mt-5 w-full md:max-w-[600px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                        <Button variant="gradient" color={`yellow`} className={`mt-5`}>All project</Button>
                    </div>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7`}>
                    {data.map((item, i) => (
                        <Card
                            shadow={false}
                            className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                        >
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url(${item.bgImage})] bg-cover bg-center`}
                            >
                                <div
                                    className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"/>
                            </CardHeader>
                            <CardBody className="relative py-14 px-6 md:px-12">
                                <Typography
                                    variant="h2"
                                    color="white"
                                    className="mb-6 font-medium leading-[1.3]"
                                >
                                    {item.description}
                                </Typography>
                                <Typography variant="h5" className="mb-4 text-gray-400">
                                    {item.name}
                                </Typography>
                                <Avatar
                                    size="xl"
                                    variant="circular"
                                    alt="tania andrew"
                                    className="border-2 border-white"
                                    src={item.avatar}
                                />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectCard

const data = [
    {
        id: 1,
        description: 'How we design and code open-source projects?',
        name: 'lorem',
        bgImage: "'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'",
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    },
    {
        id: 2,
        description: 'How we design and code open-source projects?',
        name: 'lorem',
        bgImage: "'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'",
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    },
    {
        id: 3,
        description: 'How we design and code open-source projects?',
        name: 'lorem',
        bgImage: "'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'",
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    },
    {
        id: 4,
        description: 'How we design and code open-source projects?',
        name: 'lorem',
        bgImage: "'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'",
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    },
]