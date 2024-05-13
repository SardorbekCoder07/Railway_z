import React, { useEffect, useState } from "react";
import {
    Card, CardHeader, CardBody, Typography, Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Select, Option,
} from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { api, byId, config, setConfig } from "@/api/api";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



export function Tables() {
    const [users, setUsers] = useState(null)
    const [noPdUsers, setNoPdUsers] = useState(null)
    const [role, setRole] = useState(null)
    const [userData, setUserData] = useState(null)
    const [newAdmin, setNewAdmin] = useState(null)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [addModal, setAddModal] = useState(false)

    // ******************* add valitate inputs **********************
    const [validPhoneNumber, setPhoneNumber] = useState(false);
    const [validPassword, setPassword] = useState(false);
    const [validTextP, setValidTextP] = useState(false);
    const [validTextT, setValidTextT] = useState(false);
    const [validRole, setValidRole] = useState(false);

    // ******************* edit valitate inputs **********************
    const [validPhoneNumberEdit, setPhoneNumberEdit] = useState(false);
    const [validPasswordEdit, setPasswordEdit] = useState(false);
    const [validTextPEdit, setValidTextPEdit] = useState(false);
    const [validTextTEdit, setValidTextTEdit] = useState(false);
    const [validRoleEdit, setValidRoleEdit] = useState(false);
    // *******************GET role **********************

    const openAddModal = () => setAddModal(true)
    const closeAddModal = () => {
        setAddModal(false)

        // add validation null qilish
        setPhoneNumber(null)
        setValidTextP(null)
        setPassword(null)
        setValidTextT(null)
        setValidRole(null)


    }

    const openEditModal = () => setEditModal(true)
    const closeEditModal = () => {
        setEditModal(false)

        // add validation null qilish
        setPhoneNumberEdit(null)
        setValidTextPEdit(null)
        setPasswordEdit(null)
        setValidTextTEdit(null)
        setValidRoleEdit(null)
    }
    const openDeleteModal = () => setDeleteModal(true)
    const closeDeleteModal = () => { setDeleteModal(false) }

    useEffect(() => {
        setConfig()
        getUser()
        getNoPDUser()
    }, [])

    // *******************GET USER **********************
    const getUser = () => {
        axios.get(`${api}user/leaders`, config)
            .then((res) => {
                setUsers(res.data.body);
            })
            .catch(() => { })
    }
    const getNoPDUser = () => {
        axios.get(`${api}user/leader/no/pd`, config)
            .then((res) => setNoPdUsers(res.data.body))
            .catch(() => { })
    }

    // *******************ADD USER **********************


    const addUser = () => {

        function todayPlanInfo(obj) {
            for (let key in obj) {
                if (obj[key] === undefined || obj[key] === null || obj[key] === false || obj[key] === "NaN" || obj[key] === '') {
                    console.log(obj[key]);
                    return false;
                    // Agar inputlardan birortasi bulsa xam (undefined, null, false, 0, NaN, ''), false qaytariladi
                }
            }
            return true; // xammasi 100% tuldirilsa true qaytaradi
        }
        const addData = {
            firstName: byId("addname"),
            lastName: byId("addlastname"),
            password: byId("addpassword"),
            phoneNumber: `+998${byId("addphone")}`
        }

        let isTrue = todayPlanInfo(addData)

        const newPhoneNUmber = addData.phoneNumber

        if (isTrue) {
            if (!validPhoneNumber && !validPassword) {
                if (role) {
                    axios.post(`${api}auth/register?ROLE=${role}`, addData, config)
                        .then((res) => {
                            closeAddModal()
                            getUser()
                            console.log(res.data);
                            if (res.data.message === "Phone number already exists") {
                                toast.error("Telefon raqam ro'yxatdan o'tgan ❌")
                            } else {
                                toast.success(`${role === 'ROLE_LEADER' ? 'Leader' : 'Admin'} muoffaqqiyatli qo'shildi✔`)
                            }
                        })
                        .catch((err) => {
                            closeAddModal()
                            toast.error("Telefon raqam yoki parolda xatolik mavjud❌")
                            setPhoneNumber(true)
                            setPassword(true)
                        })
                } else {
                    setValidRole(true)
                }
            }
        } else {
            toast.error(" Malunot toliq kiritilmagan !")
            setPhoneNumber(true)
            setPassword(true)
        }
    }

    // *******************EDIT USER **********************
    const editUser = () => {
        function todayPlanInfo(obj) {
            for (let key in obj) {
                if (obj[key] === undefined || obj[key] === null || obj[key] === false || obj[key] === "NaN" || obj[key] === '') {
                    return false;
                    // Agar inputlardan birortasi bulsa xam (undefined, null, false, 0, NaN, ''), false qaytariladi
                }
            }
            return true; // xammasi 100% tuldirilsa true qaytaradi
        }

        const editData = {
            firstName: byId("editname"),
            lastName: byId("editlastname"),
            password: byId("editpassword"),
            phoneNumber: `+998${byId("editphone")}`

        }
        let isTrue = todayPlanInfo(editData)

        if (isTrue) {
            if (!validPasswordEdit && !validTextPEdit) {
                axios.put(`${api}user/update?id=${userData ? userData.id : 0}`, editData, config)
                    .then(() => {
                        closeEditModal()
                        getUser()
                        toast.success("Bu hodim muvoffaqqiyatli tahrirlandi!👌")
                    })
                    .catch((err) => {
                        closeEditModal()
                        toast.success("Bu hodimni tahrirlashda xatolik yuz berdi")

                    })
            } else {
                toast.error("Telefon raqam yoki parolda xatolik mavjud❌")
                // setPhoneNumberEdit(true)
                // setPasswordEdit(true)
            }
        } else {
            toast.error(" Malunot toliq kiritilmagan !")
            setPhoneNumberEdit(false)
            setPasswordEdit(false)
        }
    }

    // *******************DELETE USER **********************
    const deleteUser = () => {
        axios.delete(`${api}user/delete?deleteUserId=${userData ? userData.id : 0}&updateUserId=${newAdmin ? newAdmin : 0}`, config)
            .then(() => {
                closeDeleteModal()
                getUser()

                toast.success("Bu hodim muvoffaqqiyatli o'chirildi!👌")
            })
            .catch((err) => {
                closeDeleteModal()
                toast.success("Hodimni o'chirishda xatolik yuz berdi ! ❌")
                { }
            })
    }
    // ******************* REGEX **********************
    const addRegex = () => {
        if (byId("addname") !== "" && byId("addlastname") !== "" && byId("addpassword") !== "") {
            setRegex(false)

            // ******************* HANDLE CHANGE **********************

            const validateInputs = () => {
                let phoneNumber = document.getElementById('addphone').value;
                let password = document.getElementById('addpassword').value;

                if (addModal) {
                    let phoneError = !(/^\d{9}$/.test(phoneNumber));
                    let passwordError = !(/^[a-zA-Z0-9]{4,}$/.test(password));

                    setPhoneNumber(phoneError)
                    setValidTextP(phoneError)

                    setPassword(passwordError)
                    setValidTextT(passwordError)

                }
            };

            const editvalidateInputs = () => {
                let phoneNumber = document.getElementById('editphone').value;
                let password = document.getElementById('editpassword').value;

                if (editModal) {
                    let phoneError = !(/^\d{9}$/.test(phoneNumber));
                    let passwordError = !(/^[a-zA-Z0-9]{4,}$/.test(password));

                    setPhoneNumberEdit(phoneError)
                    setValidTextPEdit(phoneError)

                    setPasswordEdit(passwordError)
                    setValidTextTEdit(passwordError)

                    console.log(validPhoneNumberEdit);
                    console.log(validPasswordEdit);

                }
            }
            const editRegex = () => {
                if (byId("editname") !== "" && byId("editlastname") !== "" && byId("editphone") !== "" && byId("editpassword") !== "") {
                    setRegex(false)
                } else {
                    setRegex(true)
                }
            }
        };

        return (
            <div className="mt-12 mb-8 flex flex-col gap-12 ">
                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
                        <Typography variant="h6" color="white">
                            Hodimlar jadvali
                        </Typography>
                        <Button
                            onClick={openAddModal}
                            className="bg-[#fff] text-black px-3 py-2 rounded-md"
                        // onClick={handleOpenModal} // Attach event handler to open modal
                        >
                            <UserPlusIcon className="h-6 w-6 text-black" />
                        </Button>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    {["#", "Ism", "Familiya", "Telefon raqami", "Lavozimi", "Amallar"].map((el) => (<th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {users ? users.map((item, i) => <tr key={item.id}
                                    className={`${i === (users && users.length - 1) ? '' : 'border-b'}`}>
                                    <td className={'py-3 px-5'}>
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
                                    <td className={'py-3 px-5'}>
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {item.firstName}
                                                </Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={'py-3 px-5'}>
                                        <Typography className="text-xs font-semibold text-blue-gray-600">
                                            {item.lastName}
                                        </Typography>
                                    </td>
                                    <td className={'py-3 px-5'}>
                                        <Typography className="text-xs font-semibold text-blue-gray-600">
                                            {item.phoneNumber}
                                        </Typography>
                                    </td>
                                    <td className={'py-3 px-5'}>
                                        <Typography className="text-xs font-semibold text-blue-gray-600">
                                            {item.roleName === 'ROLE_LEADER' ? 'Yo"l ustasi' : 'Kuzatuchilar'}
                                        </Typography>
                                    </td>
                                    <td className={`flex py-5 px-5 gap-3`}>
                                        <Typography
                                            onClick={() => {
                                                openEditModal()
                                                setUserData(item)
                                            }}
                                            className="cursor-pointer text-[1.2rem] duration-200 text-blue-gray-600 hover:text-black">
                                            <FaEdit />
                                        </Typography>
                                        <Typography
                                            onClick={() => {
                                                openDeleteModal()
                                                setUserData(item)
                                            }}
                                            className="mx-3 cursor-pointer text-[1.2rem] duration-200 text-blue-gray-600 hover:text-black">
                                            <MdDelete />
                                        </Typography>
                                    </td>
                                </tr>) : (<tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Typography
                                            className="text-md font-semiboldtext-blue-gray-600">
                                            Malumot yo'q
                                        </Typography></td>
                                    <td></td>
                                    <td></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>

                {/* edit modal */}
                <Dialog open={editModal} handler={closeEditModal}>
                    <DialogHeader>Tahrirlash</DialogHeader>
                    <DialogBody>
                        <div className="flex justify-center flex-col items-center gap-5">
                            <div className="w-full max-w-[24rem]">
                                <Input
                                    required
                                    defaultValue={userData ? userData.firstName : "Ma'lumot yo'q"}
                                    id="editname"
                                    label="Ism" />
                            </div>
                            <div className="w-full max-w-[24rem]">
                                <Input
                                    required
                                    defaultValue={userData ? userData.lastName : "Ma'lumot yo'q"}
                                    id="editlastname"
                                    label="Familya" />
                            </div>
                            <div className="relative flex flex-col w-full max-w-[24rem]">
                                <div className="relative w-full ">
                                    <Button
                                        disabled
                                        size="sm"
                                        className="!absolute left-1 top-1 rounded z-50"
                                    >
                                        +998
                                    </Button>
                                    <Input
                                        defaultValue={userData ? userData.phoneNumber : ""}
                                        id="editphone"
                                        type="number"
                                        className={`${validPhoneNumberEdit ? "outline outline-2 outline-offset-2 outline-red-600" : ""} ps-20`}
                                        containerProps={{
                                            className: "min-w-0",
                                        }}
                                    />
                                </div>
                                <p className={`${validTextPEdit ? "text-red-500" : ""} text-xs w-full max-w-[24rem] mt-1`}><span className=" underline">9 ta</span>  raqamdan iborat bo'lishi kerak!</p>
                            </div>

                            <div className="w-full max-w-[24rem]">
                                <Input
                                    className={`${validPasswordEdit ? "outline outline-2 outline-offset-2 outline-red-600" : ""} `}
                                    type="pasword"
                                    id="editpassword"
                                    label="Parol" />
                                <p className={`${validTextPEdit ? "text-red-500" : ""} text-xs w-full max-w-[24rem] mt-1`}><span className=" underline">9 ta</span>  raqamdan iborat bo'lishi kerak!</p>
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
                        <span>
                            <Button onClick={() => {
                                editUser()
                                editvalidateInputs()
                            }} variant="gradient" color="gray">
                                <span>Tahrirlash</span>
                            </Button>
                        </span>
                    </DialogFooter>
                </Dialog>

                {/* add modal */}
                <Dialog
                    open={addModal} handler={closeAddModal}>
                    <DialogHeader>Hodim qo'shish</DialogHeader>
                    <DialogBody>
                        <div className="flex justify-center flex-col items-center gap-5">
                            <div className="w-full max-w-[24rem]">
                                <Input required id="addname" label="Ism" />
                            </div>
                            <div className="w-full max-w-[24rem]">
                                <Input id="addlastname" label="Familya" />
                            </div>
                            <div className="relative flex flex-col w-full max-w-[24rem]">
                                <div className="relative w-full">
                                    <Button
                                        disabled
                                        size="sm"
                                        className="!absolute left-1 top-1 rounded z-50"
                                    >
                                        +998
                                    </Button>

                                    <Input

                                        defaultValue={""}
                                        id="addphone"
                                        type="number"
                                        className={`${validPhoneNumber ? "outline outline-2 outline-offset-2 outline-red-600" : ""} ps-20`}
                                        containerProps={{
                                            className: "min-w-0",
                                        }}
                                    />
                                </div>
                                <p className={`${validTextP ? "text-red-500" : ""} text-xs w-full max-w-[24rem] mt-1`}><span className=" underline">9 ta</span>  raqamdan iborat bo'lishi kerak!</p>
                            </div>

                            <div className="w-full max-w-[24rem]">
                                <Input className={`${validPassword ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`} type="password" id="addpassword" label="Parol" />
                                <p className={`${validTextT ? "text-red-500" : ""}w-full max-w-[24rem] text-xs mt-1`}>parol <span className=" underline">4 dan</span> ko'p raqam va xarflardan iborat bo'lishi kerak</p>
                            </div>
                            <div className="w-full max-w-[24rem]">
                                <Select
                                    className={`${validRole ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`} onChange={(e) => {
                                        setRole(e)
                                    }} label="Hodimning lavozimini tanlang">
                                    <Option value="ROLE_ADMIN">Kuzatuvchi</Option>
                                    <Option value="ROLE_LEADER">Yo'l ustasi</Option>
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
                        <Button onClick={() => {
                            addUser()
                            validateInputs()
                        }} variant="gradient" color="gray">
                            <span>Qo'shish</span>
                        </Button>
                    </DialogFooter>
                </Dialog>

                <Dialog open={deleteModal} handler={closeDeleteModal}>
                    <DialogHeader>O'chirish</DialogHeader>
                    <DialogBody>
                        <div className="flex justify-center">
                            <Typography
                                variant="large"
                                className=" font-bold uppercase text-blue-gray-400">
                                {userData && userData.pdName !== null ? (
                                    <div className="w-full max-w-[24rem]">
                                        <Typography
                                            variant="large"
                                            className=" mb-3 font-bold uppercase text-blue-gray-400">
                                            {`Bu hodimni o'chirish uchun `} <span
                                                className="text-black">{userData ? userData.pdName : "PD"}</span> {` ning o'rniga yangi admin tayinlashingiz kerak.`}
                                        </Typography>
                                        <Select onChange={(e) => {
                                            setNewAdmin(e)
                                        }} label="Yangi admin">
                                            {
                                                noPdUsers && noPdUsers.map((item, i) =>
                                                    <Option key={i} value={item.id}>{item.firstName} {item.lastName}</Option>
                                                )
                                            }
                                        </Select>
                                    </div>
                                ) : "Bu hodimni o'chirishingizga ishonchingiz komilmi?"
                                }
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
                        <Button onClick={deleteUser} variant="gradient" color="gray">
                            <span>Ha</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }
}
