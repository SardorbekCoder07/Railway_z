import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import boshHisobchi from './images/rahbariyat/bosh-hisobchi.jpg'
import boshliq from './images/rahbariyat/boshliq.jpg'
import bolimBoshligi from './images/rahbariyat/bolim-boshligi.jpg'

const HorizontalCard = () => {
    return (
        <section className={`bg-[#F5F5F5] py-16`} id={'landing_page_rahbariyat'}>
            <div className={`container mx-auto px-5 sm:px-0`}>
                <h1 className={`text-[#FD972E] text-center text-[2.3rem] md:text-[3rem] font-bold tracking-wide mb-10`}>Rahbariyat</h1>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10`}>
                    {data.map(item => (
                        <Card className="w-full max-w-[48rem] flex-row" key={item.id}>
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 h-72 shrink-0 rounded-r-none"
                            >
                                <img
                                    src={item.img}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h6" color="gray" className="mb-2 uppercase">
                                    {item.title}
                                </Typography>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {item.name}
                                </Typography>
                                <Typography color="gray" className="font-normal">
                                    {item.description_1}
                                </Typography>
                                <Typography color="gray" className="font-normal">
                                    {item.description_2}
                                </Typography>
                                <Typography color="gray" className="mb-4 font-normal">
                                    {item.description_3}
                                </Typography>
                                <a className="inline-block">
                                    <Button variant="gradient" color="blue" className="flex items-center gap-2">
                                        {item.btn_1}
                                    </Button>
                                </a>
                                <a className="inline-block ms-3">
                                    <Button variant="gradient" color="blue" className="flex items-center gap-2">
                                        {item.btn_2}
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default HorizontalCard

const data = [
    {
        id: 1,
        img: boshliq,
        title: "Korxona boshlig'i",
        name: 'Shodmanov B. B',
        description_1: 'Bog‘lanish uchun telefon: .....?',
        description_2: 'E-mail: .....?',
        description_3: 'Qabul kunlari: .....?',
        btn_1: 'Tarjimai hol',
        btn_2: 'Majburiyatlari'
    },
    {
        id: 2,
        img: '',
        title: "Bosh muxandis",
        name: 'Rajabov N. T',
        description_1: 'Bog‘lanish uchun telefon: .....?',
        description_2: 'E-mail: .....?',
        description_3: 'Qabul kunlari: .....?',
        btn_1: 'Tarjimai hol',
        btn_2: 'Majburiyatlari'
    },
    {
        id: 3,
        img: "",
        title: "Boshliq muovini",
        name: 'Toxirov A',
        description_1: 'Bog‘lanish uchun telefon: .....?',
        description_2: 'E-mail: .....?',
        description_3: 'Qabul kunlari: .....?',
        btn_1: 'Tarjimai hol',
        btn_2: 'Majburiyatlari'
    },{
        id: 4,
        img: "",
        title: "Boshliq muovini",
        name: 'Xidirnazarov G',
        description_1: 'Bog‘lanish uchun telefon: .....?',
        description_2: 'E-mail: .....?',
        description_3: 'Qabul kunlari: .....?',
        btn_1: 'Tarjimai hol',
        btn_2: 'Majburiyatlari'
    },
    {
        id: 5,
        img: boshHisobchi,
        title: "Bosh hisobchi",
        name: "Jo'rayev N",
        description_1: 'Bog‘lanish uchun telefon: .....?',
        description_2: 'E-mail: .....?',
        description_3: 'Qabul kunlari: .....?',
        btn_1: 'Tarjimai hol',
        btn_2: 'Majburiyatlari'
    },
    {
        id: 6,
        img: "",
        title: "Iqtisodchi",
        name: "Jo'rayev B",
        description_1: 'Bog‘lanish uchun telefon: .....?',
        description_2: 'E-mail: .....?',
        description_3: 'Qabul kunlari: .....?',
        btn_1: 'Tarjimai hol',
        btn_2: 'Majburiyatlari'
    },
    {
        id: 7,
        img: bolimBoshligi,
        title: "Hodimlar bo'limi boshlig'i",
        name: "Yo'ldoshev A",
        description_1: 'Bog‘lanish uchun telefon: .....?',
        description_2: 'E-mail: .....?',
        description_3: 'Qabul kunlari: .....?',
        btn_1: 'Tarjimai hol',
        btn_2: 'Majburiyatlari'
    },
    {
        id: 8,
        img: "",
        title: "Texnik bo'lim katta muxandisi",
        name: 'Normatov B',
        description_1: 'Bog‘lanish uchun telefon: .....?',
        description_2: 'E-mail: .....?',
        description_3: 'Qabul kunlari: .....?',
        btn_1: 'Tarjimai hol',
        btn_2: 'Majburiyatlari'
    }
]