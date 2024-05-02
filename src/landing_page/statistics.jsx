import {Button} from "@material-tailwind/react";

const statsData = [
    {
        id: 1,
        name: "200+",
        description: "Happy Clients"
    },
    {
        id: 2,
        name: "20+",
        description: "Project Completed"
    },
    {
        id: 3,
        name: "30+",
        description: "Work Employed"
    },
    {
        id: 4,
        name: "20+",
        description: "Planning Services"
    }
];

const SingleStats = ({stats}) => {
        const {name, description} = stats;
        return (
            <div className="px-3 py-[15px] w-full text-center">
                <h1 className={`bg-gradient-to-r from-indigo-800 to-blue-500 bg-clip-text text-transparent text-[1.5rem] sm:text-[2rem] lg:text-[3.2rem] font-bold`}>{name}</h1>
                <p className={`bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent text-[1rem] md:text-[1.4rem] font-medium`}>{description}</p>
            </div>
        );
    }
;

const Statistics = () => {
    return (
        <section className={`bg-[#101C30] py-16 lg:py-5`} id={`landing_page_statistics`}>
            <div className="flex flex-wrap container mx-auto">
                <div className={`w-full lg:w-1/2 flex justify-center items-center`}>
                    <div className={`text-white text-center lg:text-start`}>
                        <h1 className={`text-[#FD972E] text-[1.5rem]`}>Lorem ipsum dolor.</h1>
                        <p className={`text-[2rem] lg:text-[3rem] leading-10 mt-7 mb-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        <Button size="lg" color="white">
                            Explore
                        </Button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 rounded-sm bg-gray-light p-8 dark:bg-gray-dark sm:px-10 md:px-[50px] xl:px-[50px] xl:py-[20px] 2xl:px-[70px] 2xl:py-[30px]">
                        {statsData.map((stats) => (
                            <SingleStats key={stats.id} stats={stats}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;