import React, {useEffect, useState} from "react";
import {
    Card, CardHeader, CardBody, Typography, Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Select, Option,
} from "@material-tailwind/react";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import axios from "axios";
import {api, byId, config, setConfig} from "@/api/api";
import toast from "react-hot-toast";
import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa";

export function Tables() {
    const [users, setUsers] = useState(null)
    const [role, setRole] = useState(null)
    const [noPdUsers, setNoPdUsers] = useState(null)
    const [userData, setUserData] = useState(null)
    const [newAdmin, setNewAdmin] = useState(null)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [regex, setRegex] = useState(true)

    const openEditModal = () => setEditModal(true)
    const closeEditModal = () => {
        setEditModal(false)
        setRegex(true)
    }
    const openDeleteModal = () => setDeleteModal(true)
    const closeDeleteModal = () => setDeleteModal(false)
    const openAddModal = () => setAddModal(true)
    const closeAddModal = () => {
        setAddModal(false)
        setRegex(true)
    }

    useEffect(() => {
        setConfig()
        getUser()
        // getNoPDUser()
    }, [])

    // *******************GET USER **********************
    const getUser = () => {
        axios.get(`${api}user/leaders`, config)
            .then((res) => {
                setUsers(res.data.body);
                console.log(res.data.body);
            })
            .catch((err) => {
            })
    }

    // ********************get no pd user **************
    const getNoPDUser = () => {
        axios.get(`${api}user/leaders/no/pd`, config)
            .then((res) => {
                setNoPdUsers(res.data.body);
            })
            .catch(() => console.log('get qilishda xatolik'))
    }

    // *******************ADD USER **********************
    const addUser = () => {
        const addData = {
            firstName: byId("addname"),
            lastName: byId("addlastname"),
            password: byId("addpassword"),
            phoneNumber: byId("addphone")
        }
        axios.post(`${api}auth/register?ROLE=${role}`, addData, config)
            .then(() => {
                closeAddModal()
                getUser()
                toast.success(`${role === 'ROLE_LEADER' ? 'Leader' : 'Admin'} muoffaqqiyatli qo'shildi✔`)
            })
            .catch((err) => {
                closeAddModal()
                toast.error("xato")
                console.log(err)
            })
    }

    // *******************EDIT USER **********************
    const editUser = () => {
        const editData = {
            firstName: byId("editname"),
            lastName: byId("editlastname"),
            password: byId("editpassword"),
            phoneNumber: byId("editphone")
        }
        axios.put(`${api}user/update?id=${userData ? userData.id : 0}`, editData, config)
            .then(() => {
                closeEditModal()
                getUser()
                toast.success("Bu hodim muvoffaqqiyatli tahrirlandi!👌")
            })
            .catch((err) => {
                closeEditModal()
                console.log(err)
            })
    }

    // *******************DELETE USER **********************
    const deleteUser = () => {
        axios.delete(`${api}user/delete?deleteUserId=${userData ? userData.id : 0}&updateUserId=${newAdmin ? newAdmin : 0}`)
            .then(() => {
                closeDeleteModal()
                getUser()
                toast.success("Bu hodim muvoffaqqiyatli tahrirlandi!👌")

            })
            .catch((err) => {
                closeDeleteModal()
                console.log(err)
            })
    }


    // ******************* REGEX **********************
    const addRegex = () => {
        if (byId("addname") !== "" && byId("addlastname") !== "" && byId("addphone") !== "" && byId("addpassword") !== "") {
            setRegex(false)
        } else {
            setRegex(true)
        }
    }

    const editRegex = () => {
        if (byId("editname") !== "" && byId("editlastname") !== "" && byId("editphone") !== "" && byId("editpassword") !== "") {
            setRegex(false)
        } else {
            setRegex(true)
        }
    }

    return (<div className="mt-12 mb-8 flex flex-col gap-12 ">
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
                    <UserPlusIcon className="h-6 w-6 text-black"/>
                </Button>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                    <tr>
                        {["#", "Ism", "Familya", "Telfon raqami", "Lavozimi", "Harakatlar"].map((el) => (<th
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
                                {item.roleName === 'ROLE_LEADER' ? 'Leader' : 'Admin'}
                            </Typography>
                        </td>
                        <td className={`flex py-5 px-5 gap-3`}>
                            <Typography
                                onClick={() => {
                                    openEditModal()
                                    setUserData(item)
                                }}
                                className="cursor-pointer text-[1.2rem] duration-200 text-blue-gray-600 hover:text-black">
                                <FaEdit/>
                            </Typography>
                            <Typography
                                onClick={() => {
                                    openDeleteModal()
                                    setUserData(item)
                                }}
                                className="mx-3 cursor-pointer text-[1.2rem] duration-200 text-blue-gray-600 hover:text-black">
                                <MdDelete/>
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
                <div className="flex justify-center flex-col items-center gap-7">
                    <div className="w-full max-w-[24rem]">
                        <Input
                            onChange={editRegex}
                            required
                            defaultValue={userData ? userData.firstName : "Ma'lumot yo'q"}
                            id="editname"
                            label="Ism"/>
                    </div>
                    <div className="w-full max-w-[24rem]">
                        <Input
                            onChange={editRegex}
                            required
                            defaultValue={userData ? userData.lastName : "Ma'lumot yo'q"}
                            id="editlastname"
                            label="Familya"/>
                    </div>
                    <div className="relative flex w-full max-w-[24rem]">
                        <Button
                            disabled
                            size="sm"
                            className="!absolute left-1 top-1 rounded z-50"
                        >
                            +998
                        </Button>
                        <Input
                            onChange={editRegex}
                            defaultValue={userData ? userData.phoneNumber : ""}
                            id="editphone"
                            type="number"
                            className="ps-20"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                    </div>
                    <div className="w-full max-w-[24rem]">
                        <Input type="password" onChange={addRegex} id="addpassword" label="Parol"/>
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
                      <Button disabled={regex} onClick={editUser} variant="gradient" color="gray">
                        <span>Tahrirlash</span>
                      </Button>
                </span>
            </DialogFooter>
        </Dialog>

        {/* add modal */}
        <Dialog open={addModal} handler={closeAddModal}>
            <DialogHeader>Hodim qo'shish</DialogHeader>
            <DialogBody>
                <div className="flex justify-center flex-col items-center gap-7">
                    <div className="w-full max-w-[24rem]">
                        <Input onChange={addRegex} required id="addname" label="Ism"/>
                    </div>
                    <div className="w-full max-w-[24rem]">
                        <Input onChange={addRegex} id="addlastname" label="Familya"/>
                    </div>
                    <div className="relative flex w-full max-w-[24rem]">
                        <Button
                            disabled
                            size="sm"
                            className="!absolute left-1 top-1 rounded z-50"
                        >
                            +998
                        </Button>
                        <Input
                            onChange={addRegex}
                            defaultValue={""}
                            id="addphone"
                            type="number"
                            className="ps-20"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                    </div>
                    <div className="w-full max-w-[24rem]">
                        <Input type="password" onChange={addRegex} id="addpassword" label="Parol"/>
                    </div>
                    <div className="w-full max-w-[24rem]">
                        <Select onChange={(e) => {
                            setRole(e)
                        }} label="Hodimning lavozimini tanlang">
                            <Option value="ROLE_ADMIN">Admin</Option>
                            <Option value="ROLE_LEADER">Leder</Option>
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
                    <Button disabled={regex} onClick={addUser} variant="gradient" color="gray">
                        <span>Qo'shish</span>
                    </Button>
                </span>
            </DialogFooter>
        </Dialog>

        {/* delete modal */}
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
                                <Select
                                    onChange={(e) => {
                                        setNewAdmin(e)
                                    }}
                                    label="Yangi admin">
                                    {noPdUsers && noPdUsers.map((item, i) =>
                                        <Option key={i} value={item.id}>
                                            {item.firstName} {item.lastName}
                                        </Option>
                                    )}
                                </Select>
                            </div>
                        ) : (
                            "Bu hodimni o'chirishingizga ishonchingiz komilmi?"
                        )}
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

        {/* <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Projects Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["companies", "members", "budget", "completion", ""].map(
                  (el) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {projectsTableData.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "gray"}
                            className="h-1"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <EllipsisVerticalIcon
                            strokeWidth={2}
                            className="h-5 w-5 text-inherit"
                          />
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card> */}
    </div>);
}

