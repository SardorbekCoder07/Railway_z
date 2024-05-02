import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {Link} from "react-router-dom";

const Brands = () => {
    const responsive = {
        0: {items: 1},
        500: {items: 2},
        700: {items: 3},
        992: {items: 4},
        1300: {items: 5}
    };

    return (
        <section id={`landing_page_brands`} className={`bg-[#101C30] py-10`}>
            {/*<div className="flex flex-wrap">*/}
            <div className="w-full">
                <AliceCarousel
                    items={brandsData.map(item =>
                        <div
                            className="flex items-center bg-gray-light dark:bg-gray-dark"
                            key={item.id}>
                            <Link
                                to={item.href}
                                target={`_blank`}
                                className={`w-full h-40 p-8 sm:px-10 md:px-[50px] xl:px-[50px] xl:py-[20px] 2xl:px-[70px] 2xl:py-[30px]`}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={`w-full h-full object-contain grayscale hover:grayscale-0 duration-200`}
                                />
                            </Link>
                        </div>
                    )}
                    responsive={responsive}
                    autoPlay
                    autoPlayInterval={1500}
                    infinite
                    mouseTracking
                    disableButtonsControls
                    disableDotsControls
                />
            </div>
            {/*</div>*/}
        </section>
    );
};

export default Brands;

const brandsData = [
    {
        id: 6,
        name: "Faza",
        href: "https://fazadesign.uz/",
        image: "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
    },
    {
        id: 1,
        name: "UmidUchqunlari",
        href: "https://www.instagram.com/umid_uchqunlari/",
        image: "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
    },
    {
        id: 2,
        name: "Epsilon",
        href: "http://hrepsilon.uz/",
        image: "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
    },
    {
        id: 3,
        name: "ilmZiyo",
        href: "https://ilmuziyo.uz/",
        image: "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
    },
    {
        id: 4,
        name: "Gardenariya",
        href: "https://gardenariya.uz/",
        image: "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
    },
    {
        id: 5,
        name: "Rel",
        href: "https://real-ocenka.uz/",
        image: "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
    },
    {
        id: 7,
        name: "temiryol",
        href: "",
        image: "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
    },
];