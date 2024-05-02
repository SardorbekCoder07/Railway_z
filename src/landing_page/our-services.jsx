import React, {useState} from "react";

const OurServices = () => {
    const [hover, setHover] = useState(false);
    return (
        <section id={`landing-page-our-services`}>
            <div className={`container mx-auto py-36 px-5 sm:px-0`}>
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className={`text-[#FD972E] text-[1.4rem] h2 mb-4`}>Lorem ipsum.</h1>
                    <p className="text-2xl text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10`}>
                    {data.map((item, index) => (
                        <div className={`hover:shadow-md hover:shadow-gray-300 p-4 hover:-translate-y-2 rounded duration-200`}>
                            <div className={`flex justify-start items-start gap-7`} key={item.id}>
                                <div className="w-8 h-9 px-5 bg-[#FD972E] flex justify-center items-center">
                                    <span className="text-[16px] text-white">{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-[24px] text-black mb-[20px]">{item.title}</h3>
                                    <div className="opacity-70">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;

const data = [
    {
        id: 1,
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    }
]