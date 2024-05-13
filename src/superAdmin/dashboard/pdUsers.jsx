import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { authorsTableData } from "@/superAdmin/data";
import { CircularPagination } from "@/superAdmin/widgets/layout/circlePagination";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { api, byId, config, setConfig } from "@/api/api";
import toast from "react-hot-toast";

export function PdUsers() {
    const [PD, setPD] = useState(null)
    const [users, setUsers] = useState(null)
    const [userID, setUserId] = useState(null)
    const [userData, setUserData] = useState(null)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [regex, setRegex] = useState(true)

    const openAddModal = () => setAddModal(true)
    const closeAddModal = () => {
        setAddModal(false)
        setRegex(true)
    }
    const openEditModal = () => setEditModal(true)
    const closeEditModal = () => {
        setEditModal(false)
        setRegex(true)
    }
    const openDeleteModal = () => setDeleteModal(true)
    const closeDeleteModal = () => setDeleteModal(false)

    useEffect(() => {
        setConfig()
        getPD()
        getUser()
    }, [])


    // *******************GET USER **********************
    const getUser = () => {
        axios.get(`${api}user/leader/no/pd`, config)
            .then((res) => {
                setUsers(res.data.body);
            })
            .catch((err) => {
            })
    }

    // *******************GET USER **********************
    const getPD = () => {
        axios.get(`${api}pd/all`, config)
            .then((res) => {
                setPD(res.data.body);
            })
            .catch((err) => {
            })
    }

    // *******************ADD USER **********************

    const addPD = () => {
        const addData = {
            name: byId("addPD"),
            employeeCount: byId("addemployeeCount"),
            userId: userID ? userID : 0
        }
        axios.post(`${api}pd/add`, addData, config)
            .then((res) => {
                closeAddModal()
                getPD()
                toast.success("Vazifa muoffaqqiyatli bajarildi!")
            })
            .catch((err) => {
                closeAddModal()
                toast.error("PD qo'shishda xatolik yuzberdi")
                {
                }
                ;
            })
    }


    // *******************EDIT USER **********************


    const editPd = () => {
        const editData = {
            name: byId("editPD"),
            employeeCount: byId("editemployeeCount"),
            userId: userID ? userID : 0
        }
        axios.put(`${api}pd/update?id=${userData ? userData.id : 0}`, editData, config)
            .then((res) => {
                closeEditModal()
                getPD()
                toast.success("Bu hodim muvoffaqqiyatli tahrirlandi!👌")

            })
            .catch((err) => {
                toast.error("PD edit qilishda xatolik yuzberdi")
                closeEditModal()
            })
    }

    // *******************DELETE USER **********************

    const deletePD = () => {
        axios.delete(`${api}pd/delete?id=${userData ? userData.id : 0}`, config)
            .then(() => {
                closeDeleteModal()
                getPD()
                toast.success("Bu PD muvoffaqqiyatli tahrirlandi!👌")

            })
            .catch((err) => {
                toast.error("PD o'chirishda xatolik yuz berdi")
                closeDeleteModal()
            })

    }


    // ******************* REGEX **********************

    const addRegex = () => {
        if (
            byId("addPD") !== "" &&
            byId("addemployeeCount") !== ""
        ) {
            setRegex(false)
        } else {
            setRegex(true)
        }

    }

    const editRegex = () => {
        if (
            byId("editPD") !== "" &&
            byId("editemployeeCount") !== ""
        ) {
            setRegex(false)
        } else {
            setRegex(true)
        }
    }
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12 ">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
                    <Typography variant="h6" color="white">
                        Yo'l Ustalari
                    </Typography>
                    <Button
                        onClick={openAddModal}
                        className="bg-[#fff] text-black px-3 py-2 rounded-md">
                        <UserPlusIcon className="h-6 w-6 text-black" />
                    </Button>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["#", "Bo'linma", "Ishchilar soni", "Yo'l Ustalari", "Amallar"].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>

                            {PD ? PD.map((item, i) => {
                                const className = `py-3 px-5  ${i === PD && PD.length - 1
                                    ? ""
                                    : "border-b border-blue-gray-50"
                                    }`
                                return (

                                    <tr key={i}>
                                        <td className={className}>
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        className="font-semibold text-blue-gray-600"
                                                    >
                                                        {i + 1}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-semibold"
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <Typography className="text-xs font-semibold text-blue-gray-600">
                                                {item.employeeCount}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography className="text-xs font-semibold text-blue-gray-600">
                                                {item.userFullName}
                                            </Typography>
                                        </td>
                                        <td className={`${className} flex py-5 gap-3`}>
                                            <Typography onClick={() => {
                                                openEditModal()
                                                setUserData(item)
                                            }}
                                                className=" cursor-pointer text-[1.2rem] font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600">
                                                <FaEdit />
                                            </Typography>
                                            <Typography onClick={() => {
                                                openDeleteModal()
                                                setUserData(item)
                                            }}
                                                className=" cursor-pointer text-[1.2rem] font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                                                <MdDelete />
                                            </Typography>
                                        </td>
                                    </tr>
                                )
                            }
                            ) : (
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center">
                                        <Typography
                                            className=" cursor-pointer text-md font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                                            Malumot yo'q
                                        </Typography></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                            )}

                        </tbody>
                    </table>
                </CardBody>
            </Card>
            <div>

                {/* edit modal */}
                <Dialog open={editModal} handler={closeEditModal}>
                    <DialogHeader>Tahrirlash</DialogHeader>
                    <DialogBody>
                        <div className="flex justify-center flex-col items-center gap-7">
                            <div className="w-full max-w-[24rem]">
                                <Input onChange={editRegex} required defaultValue={userData ? userData.name : "Ma'lumot yo'q"}
                                    id="editPD" label="Bo'linma nomi" />
                            </div>
                            <div className="w-full max-w-[24rem]">
                                <Input onChange={editRegex} required
                                    defaultValue={userData ? userData.employeeCount : "Ma'lumot yo'q"} id="editemployeeCount"
                                    label="Ishchi soni" />
                            </div>
                            <div className="w-full max-w-[24rem]">
                                <Select onChange={(e) => {
                                    setUserId(e)
                                    editRegex()
                                }} label="Yo'l ustasini tanlash">
                                    {
                                        users ? users.map((item, i) =>
                                            <Option key={i} value={item.id}>{item.firstName} {item.lastName}</Option>
                                        ) : (
                                            <Option>Malumot yo'q</Option>

                                        )
                                    }
                                </Select>
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={closeEditModal}
                            className="mr-1"
                        >
                            <span>Orqaga</span>
                        </Button>
                        <span className={`${regex ? "cursor-not-allowed" : ""}`}>

                            <Button disabled={regex} onClick={editPd} variant="gradient" color="gray">
                                <span>Tahrirlash</span>
                            </Button>
                        </span>
                    </DialogFooter>
                </Dialog>
            </div>
            <div>

                {/* add modal */}

                <Dialog open={addModal} handler={closeAddModal}>
                    <DialogHeader>Bo'linma qo'shish</DialogHeader>
                    <DialogBody>
                        <div className="flex justify-center flex-col items-center gap-7">
                            <div className="w-full max-w-[24rem]">
                                <Input onChange={addRegex} required id="addPD" label="PD nomi" />
                            </div>
                            <div className="w-full max-w-[24rem]">
                                <Input onChange={addRegex} required id="addemployeeCount" label="Ishchi soni" />
                            </div>
                            <div className="w-full max-w-[24rem]">
                                <Select onChange={(e) => {
                                    setUserId(e)
                                    addRegex()
                                }} label="Yo'l ustasini tanlash">
                                    {
                                        users ? users.map((item, i) =>
                                            <Option key={i} value={item.id}>{item.firstName} {item.lastName}</Option>
                                        ) : (
                                            <Option>Malumot yo'q</Option>

                                        )
                                    }
                                </Select>
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={closeAddModal}
                            className="mr-1"
                        >
                            <span>Orqaga</span>
                        </Button>
                        <span className={`${regex ? "cursor-not-allowed" : ""}`}>

                            <Button disabled={regex} onClick={addPD} variant="gradient" color="gray">
                                <span>Qo'shish</span>
                            </Button>
                        </span>
                    </DialogFooter>
                </Dialog>
            </div>
            <div>

                {/* delete modal */}
                <Dialog open={deleteModal} handler={closeDeleteModal}>
                    <DialogHeader>O'chirish</DialogHeader>
                    <DialogBody>
                        <div className="flex justify-center">

                            <Typography
                                variant="large"
                                className=" font-bold uppercase text-blue-gray-400">
                                Bu bo'limni o'chirishingizga ishonchingiz komilmi?
                            </Typography>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={closeDeleteModal}
                            className="mr-1"
                        >
                            <span>Yo'q</span>
                        </Button>
                        <Button onClick={deletePD} variant="gradient" color="gray">
                            <span>Ha</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>
        </div>
    );
}

