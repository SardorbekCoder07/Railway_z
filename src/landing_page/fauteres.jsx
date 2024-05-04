import React, {useState, useRef, useEffect} from 'react';
import Transition from './utils/transitoin';
import img1_1 from './images/servis/section1.jpg'
import img1_2 from './images/servis/section2.jpg'
import img2_1 from './images/servis/section3.jpg'
import img2_2 from './images/servis/section4.jpg'
import img3_1 from './images/servis/section5.jpg'
import img3_2 from './images/servis/section6.jpg'

function Features() {
    const [tab, setTab] = useState(1);
    const tabs = useRef(null);

    const heightFix = () => {
        if (tabs.current.children[tab]) {
            tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
        }
    }
    useEffect(() => {
        heightFix()
    }, [tab])

    return (
        <section className="relative pb-40 md:pb-20 bg-[#F5F5F5]" id={`landing_page_features_info`}>
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className={`text-[#FD972E] text-[1.5rem] h2 mb-4`}>Xizmatlari, Vazifalari</h1>
                        <p className="text-xl text-gray-600">
                            Bizning xaizmatlarimiz va vazifalarimiz bilan tanishishingiz mumkin
                        </p>
                    </div>
                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                             data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 className="text-2xl mb-3">
                                    Korxonaning asosiy ish faoliyati:
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Qashqadaryo temir yo‘l ta’mirlash korxonasi Qarshi Mintaqaviy temir yo‘l uzeli shu’ba
                                    korxonasining tarkibiy bo‘linmasi hisoblanadi va o‘z xo‘jalik faoliyati natijalari uchun,
                                    o‘zaro tuzilgan shartnomalar asosida olingan majburiyatlar bo‘yicha iste’molchilar oldida,
                                    davlat budjeti, bank, korxona jamoasi oldida qonunchilikka asosan mustaqil ravishda
                                    to‘laligicha javobgardir.
                                </p>
                            </div>
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(1);
                                    }}
                                >
                                    <div>
                                        <div className="text-gray-600">
                                            O‘ziga biriktirilgan temir yo‘llarning texnik sozligini va ulardan samarali
                                            foydalanishni ta’minlash.
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"/>
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(2);
                                    }}
                                >
                                    <div>
                                        <div className="text-gray-600">
                                            Poyezdlar harakat havfsizligini ta’minlash harakat havfsizligi buzilishi hollari
                                            oldini olish, bu ishda halokatlar, nuqsonlar va nosozliklarga yo‘l qo‘ymaslik
                                            choralarini ko‘rish
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                                                fillRule="nonzero"/>
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(3);
                                    }}
                                >
                                    <div>
                                        <div className="text-gray-600">
                                            Ishlab chiqarish samaradorligini va rentabelligini oshirish, yog‘ilg‘i moylash
                                            mahsulotlari, elektr energiyasi va boshqa materiallardan tejamkorlik bilan foydalanish
                                            choralarini ko‘rish
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                                                fill="#191919" fillRule="nonzero"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="zoom-y-out" ref={tabs}>
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded h-60 object-cover"
                                            src={img1_1}
                                            width="500"
                                            height="462" alt="Features bg"/>
                                        <img
                                            className="md:max-w-none rounded mt-28 absolute w-full h-60 object-cover object-bottom left-0 top-36 transform animate-float"
                                            src={img1_2}
                                            width="500"
                                            alt="Element"/>
                                    </div>
                                </Transition>
                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded h-60 object-cover"
                                            src={img2_1}
                                            width="500"
                                            height="462"
                                            alt="Features bg"/>
                                        <img
                                            className="md:max-w-none rounded mt-28 absolute w-full h-60 object-cover left-0 top-36 transform animate-float"
                                            src={img2_2}
                                            width="500"
                                            alt="Element"/>
                                    </div>
                                </Transition>
                                {/* Item 3 */}
                                <Transition
                                    show={tab === 3}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded h-60 object-cover"
                                            src={img3_1}
                                            width="500"
                                            alt="Features bg"/>
                                        {/* Remove unnecessary background image */}
                                        <img
                                            className="md:max-w-none rounded mt-28 absolute w-full h-60 object-cover left-0 top-36 transform animate-float"
                                            src={img3_2}
                                            width="500"
                                            alt="Element"/>
                                    </div>
                                </Transition>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Features;
