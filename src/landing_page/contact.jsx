import {Typography} from "@material-tailwind/react";

const Contact = () => {
    return (
        <section className="px-8 py-8 lg:py-16" id="landing_page_contact">
            <div className="container mx-auto text-center">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-16 !text-3xl lg:!text-5xl"
                >
                    Bog‘lanish uchun
                </Typography>
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9658.978393009786!2d65.77603566763352!3d38.856112223647436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea70e02b0999b%3A0x2c13ab85fac89ee9!2sQarshi%20mintaqaviy%20temir%20yo&#39;l%20uzeli%20unitar%20korxonasi!5e0!3m2!1suz!2s!4v1714800901700!5m2!1suz!2s"
                        height="450"
                        allowFullScreen=""
                        className={'rounded w-full'}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className={'grid grid-cols-1 gap-y-7'}>
                        {data.map(item => (
                            <div className={'flex justify-start items-start gap-10'} key={item.id}>
                                <div>{item.icon}</div>
                                <div className={'text-start'}>
                                    <Typography variant={'h4'}>{item.name}</Typography>
                                    <Typography variant={'h6'} className={'opacity-70 font-medium'}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

const data = [
    {
        id: 1,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="blue" className="bi bi-geo-alt"
                 viewBox="0 0 16 16">
                <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
        ),
        name: 'Manzil',
        description: 'Qashqadaryo viloyati, Qarshi shahri, Shayxali qo‘rg‘onchasi, 27-uy.'
    },
    {
        id: 2,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="blue" className="bi bi-telephone"
                 viewBox="0 0 16 16">
                <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
        ),
        name: 'Ishonch telefoni',
        description: '75 227 01 25'
    },
    // {
    //     id: 3,
    //     icon: (
    //         <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="blue" className="bi bi-envelope"
    //              viewBox="0 0 16 16">
    //             <path
    //                 d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    //         </svg>
    //     ),
    //     name: 'E-mail',
    //     description: 'rju-5@railway.uz'
    // },
    {
        id: 4,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="blue"
                 className="bi bi-calendar2-check-fill" viewBox="0 0 16 16">
                <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5m-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
            </svg>
        ),
        name: 'Ish kunlari',
        description: 'Dushanba – Juma. Dam olish kunlari: Shanba va yakshanba'
    }, {
        id: 5,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="blue" className="bi bi-stopwatch"
                 viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                <path
                    d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
            </svg>
        ),
        name: 'Ish vaqti',
        description: 'Ish soati: 09:00 dan 18:00 gacha'
    },
]