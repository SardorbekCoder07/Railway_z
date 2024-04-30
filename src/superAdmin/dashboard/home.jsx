import React, {useEffect, useState} from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";
import {StatisticsCard} from "@/superAdmin/widgets/cards";
import {statisticsCardsData} from "@/superAdmin/data";
import {CheckCircleIcon, TrashIcon} from "@heroicons/react/24/solid";
import {api, config, setConfig} from "@/api/api";
import axios from "axios";

export function Home() {
    const [addModal, setAddModal] = useState(false);
    const [todayModal, setTodayModal] = useState(false);
    const [tomorrowModal, setTomorrowModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false)
    const [adminUsers, setAdminUsers] = useState(null)
    const [pdbList, setPdbList] = useState(null)
    const [railwayList, setRailwayList] = useState(null)
    const [pkList, setPkList] = useState(null)
    const [plan, setPlan] = useState(null)

    useEffect(() => {
        setConfig()
        getUserAdmin()
    }, [])

    const openDeleteModal = () => setDeleteModal(true)
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const openAddModal = () => setAddModal(true);
    const closeAddModal = () => setAddModal(false);
    const handleOpenTodayModal = () => setTodayModal(true);
    const handleCloseTodayModal = () => setTodayModal(false);
    const handleOpenTomorrowModal = () => setTomorrowModal(true);
    const handleCloseTomorrowModal = () => setTomorrowModal(false);

    // getUserAdmin
    const getUserAdmin = () => {
        axios.get(`${api}pd/all`, config)
            .then(res => {
                if (res.status === 200) setAdminUsers(res.data.body)
                else setAdminUsers(null)
            }).catch(err => console.log(err))
    }

    // get pdb
    const getPDB = (id) => {
        if (id) {
            axios.get(`${api}pdb/list?pdId=${id}`, config)
                .then(res => {
                    if (res.status === 200) setPdbList(res.data.body)
                    else setPdbList(null)
                }).catch(err => console.log(err))
        } else setPdbList(null)
    }

    // get railway
    const getRailway = (id) => {
        if (id) {
            axios.get(`${api}railway/list?pdbId=${id}`, config)
                .then(res => {
                    if (res.status === 200) setRailwayList(res.data.body)
                    else setRailwayList(null)
                }).catch(err => console.log(err))
        } else setRailwayList(null)
    }

    // get pk
    const getPK = (id) => {
        if (id) {
            axios.get(`${api}pk?railwayId=${id}`, config)
                .then(res => {
                    if (res.status === 200) setPkList(res.data.body)
                    else setPkList(null)
                }).catch(err => console.log(err))
        } else setPkList(null)
    }

    // get day plan
    const getDayPlan = (id) => {
        if (id) {
            console.log(id)
            axios.get(`${api}day/plan?pkId=${id}`, config)
                .then(res => {
                    if (res.data.success === true) {
                        setPlan(res.data.body)
                    } else setPlan(null)
                })
        }
    }

    return (<div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {statisticsCardsData.map(({icon, title, footer, ...rest}) => (<StatisticsCard
                key={title}
                {...rest}
                title={title}
                icon={React.createElement(icon, {
                    className: "w-6 h-6 text-white",
                })}
            />))}
        </div>
        <div className="mb-6 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
                    <Typography variant="h6" color="white">
                        Dashboard
                    </Typography>
                </CardHeader>
                <CardBody className="md:overflow-x-scroll">
                    {/*select*/}
                    <div className={`mb-6 flex gap-5 justify-start items-center`}>
                        <div className="w-52">
                            <Select
                                onChange={id => getPDB(id)}
                                label="PD list">
                                {adminUsers && adminUsers.length !== 0 ?
                                    adminUsers.map(item => (
                                        <Option value={item.id}>{item.name}</Option>
                                    )) : (
                                        <Option value={``}>Ma'lumot yo'q</Option>
                                    )}
                            </Select>
                        </div>
                        <div className="w-52">
                            <Select
                                onChange={id => getRailway(id)}
                                label="PDB">
                                {pdbList && pdbList.length !== 0
                                    ? pdbList.map(item =>
                                        <Option value={item.id}>{item.name}</Option>
                                    )
                                    : <Option value={``}>Ma'lumot yo'q</Option>
                                }
                            </Select>
                        </div>
                        <div className="w-52">
                            <Select
                                onChange={id => getPK(id)}
                                label="Railway (km)">
                                {railwayList && railwayList.length !== 0
                                    ? railwayList.map(item =>
                                        <Option value={item.id}>{item.km} km</Option>
                                    )
                                    : <Option value={``}>Ma'lumot yo'q</Option>
                                }
                            </Select>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-full table-auto">
                            <thead>
                            <tr>
                                <th className={`border-b border-blue-gray-200 py-3 px-5 text-left`}>#</th>
                                <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                                    <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                                        PD
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                                    <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                                        Ma'lumotlar
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                                    <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                                        Actions
                                    </Typography>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {pkList && pkList.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border-b border-blue-gray-200 py-3 px-5">
                                        {index + 1}
                                    </td>
                                    <td className="border-b border-blue-gray-200 py-3 px-5">
                                        <div className="flex items-center gap-4">
                                            <CheckCircleIcon className="h-5 w-5 text-green-500"/>
                                            <span>{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="border-b border-blue-gray-200 py-3 px-5">
                                        <div className="flex items-center gap-2">
                                            <Button onClick={() => {
                                                getDayPlan(item.id)
                                                handleOpenTodayModal()
                                            }}>Bugungi</Button>
                                            <Button onClick={() => {
                                                getDayPlan(item.id)
                                                handleOpenTomorrowModal()
                                            }}>Ertangi</Button>
                                        </div>
                                    </td>
                                    <td className="border-b border-blue-gray-200 py-3 px-5">
                                        <button
                                            className="flex items-center justify-center gap-1 bg-red-500 text-white px-3 py-1 rounded-md">
                                            <TrashIcon className="h-4 w-4"/>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </div>

        {/* Add Modal */}
        <Dialog open={addModal} onClose={closeAddModal}>
            <DialogHeader>PD qo'shish</DialogHeader>
            <DialogBody>
                <div className="flex justify-center flex-col items-center gap-7">
                    <div className="w-full max-w-[24rem]">
                        <Input id="addname" label="Ism"/>
                    </div>
                    <div className="w-full max-w-[24rem]">
                        <Input id="addlastname" label="Familya"/>
                    </div>
                    <div className="relative flex w-full max-w-[24rem]">
                        <Button disabled size="sm" className="!absolute left-1 top-1 rounded">
                            +998
                        </Button>
                        <Input
                            id="addphone"
                            type="number"
                            className="ps-20"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={closeAddModal}>
                    <span>Orqaga</span>
                </Button>
                <Button variant="gradient" color="gray">
                    <span>Qo'shish</span>
                </Button>
            </DialogFooter>
        </Dialog>

        {/*    modals*/}
        <Dialog open={todayModal} onClose={handleCloseTodayModal}>
            <DialogHeader>Bugungi Modal</DialogHeader>
            <DialogBody>
                <p>{plan ? plan.todayPlan : 'Ish mavjud emas'}</p>
            </DialogBody>
            <DialogFooter>
                <Button onClick={handleCloseTodayModal}>Close Modal</Button>
            </DialogFooter>
        </Dialog>
        <Dialog open={tomorrowModal} onClose={handleCloseTomorrowModal}>
            <DialogHeader>Ertangi Modal</DialogHeader>
            <DialogBody>
                <p>{plan ? plan.tomorrowPlan : 'Ish mavjud emas'}</p>
            </DialogBody>
            <DialogFooter>
                <Button onClick={handleCloseTomorrowModal}>Close Modal</Button>
            </DialogFooter>
        </Dialog>

    </div>);
}

export default Home;
