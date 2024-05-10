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
  Option,
  Select,
} from "@material-tailwind/react";
import { UserPlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { api, byId, config, setConfig } from "@/api/api";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export function PDBusers() {
  const [editModal, setEditModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [pdbUsers, setPdbaUsers] = useState(null)
  const [pdUsers, setPdUsers] = useState(null)
  const [pdbData, setpdbdata] = useState(null)
  const [pdId, setpdId] = useState(null)
  const [selectPdId, setSelectPdId] = useState(null)
  const [regEX, setRegEX] = useState(true)


  const openEditModal = () => setEditModal(true)
  const closeEditModal = () => setEditModal(false)
  const openAddModal = () => setAddModal(true)
  const closeAddModal = () => setAddModal(false)

  useEffect(() => {
    setConfig()
    getPD()
  }, [])

  // *******************GET USER **********************


  const getPD = () => {
    axios.get(`${api}pd/all`, config)
      .then((res) => {
        setPdUsers(res.data.body);
      })
      .catch((err) => { })
  }

  const getPDBuser = (id) => {
    axios.get(`${api}pdb/list?pdId=${id}`, config)
      .then((res) => {
        setPdbaUsers(res.data.body)
      })
      .catch((err) => {
      })
  }

  // ----------PDB add------------
  const addPdb = () => {
    const addPDBdata = {
      pdId: pdId ? pdId : 0,
      name: byId("addname"),
      userFullName: byId("addlastname"),
    }
    axios.post(`${api}pdb`, addPDBdata, config)
      .then((res) => {
        closeAddModal();
        getPDBuser(selectPdId ? selectPdId : 0)
        toast.success("Vazifa muvoffaqqiyatli bajarildi!")
      })
      .catch((err) => {
        closeAddModal();
        toast.success("PDB o'chirishda xatolik yuz berdi")

      })
  }

  // ----------PDB edit------------
  const editPDB = () => {
    const editPDbdata = {
      pdId: 0,
      name: byId("editName"),
      userFullName: byId("editlastname"),
    }
    axios.put(`${api}pdb?id=${pdbData ? pdbData.id : 0}`, editPDbdata, config)
      .then((res) => {
        closeEditModal();
        getPDBuser(selectPdId ? selectPdId : 0)
        toast.success("Tahrirlandi!")
      })
      .catch((err) => {
        closeEditModal();
        toast.error("PDB tahrirlanmadi");
      })
  }

  // RegEX ADD
  const addRegEx = () => {
    if (byId('addname') !== "" && byId("addlastname") !== "") {
      setRegEX(false)
    } else {
      setRegEX(true)
    }
  }
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 ">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
          <Typography variant="h6" color="white">
            Yo'l brigaderlar jadvali
          </Typography>
          <Button
            onClick={openAddModal}
            className="bg-[#fff] text-black px-3 py-2 rounded-md"
          >
            <UserPlusIcon className="h-6 w-6 text-black" />
          </Button>
        </CardHeader>
        <CardBody className=" px-0 pt-0 pb-2">
          {/* <Typography variant="h6" color="gray" className="flex items-center justify-center mb-2 ">
            PD tanlang
          </Typography> */}
          <div className="w-full flex justify-center items-center gap-5">
            <div className="w-full max-w-[24rem]">
              <Select onChange={(e) => {
                setSelectPdId(e)
                getPDBuser(e)
              }} label="Bo'linmani tanlang">
                {
                  pdUsers ? pdUsers.map((item, i) =>
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ) : (
                    <Option>Malumot yo</Option>
                  )
                }
              </Select>
            </div>
          </div>
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["#", "Brigaderlar", "F.I.O", "Amallar"].map((el) => (
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
              {pdbUsers ? pdbUsers.map(
                (item, i) => {
                  const className = `py-3 px-5  ${i === pdbUsers && pdbUsers.length - 1
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
                          {item.userFullName}
                        </Typography>

                      </td>
                      <td className={`${className} flex py-5 gap-3`}>
                        <Typography onClick={() => {
                          openEditModal()
                          setpdbdata(item)
                        }} className=" cursor-pointer text-[1.2rem] font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600">
                          <FaEdit />
                        </Typography>

                      </td>
                    </tr>
                  );
                }
              ) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td className="">
                    <Typography className=" cursor-pointer text-md font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                      Malumot yo'q
                    </Typography></td>
                  <td></td>

                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {/* Edit pdb  */}
      <div>
        <Dialog open={editModal} handler={closeEditModal}>
          <div>

            <DialogHeader className="flex items-center justify-between">Tahrirlash
              <XMarkIcon className="cursor-pointer" onClick={closeEditModal} width={20} />
            </DialogHeader>
          </div>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input defaultValue={pdbData ? pdbData.name : "Ma'lumot yo'q"} id="editName" label="BRIGADA" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Input defaultValue={pdbData ? pdbData.userFullName : "Ma'lumot yo'q"} id="editlastname" label="F.I.O" />
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
            <Button
              onClick={editPDB}
              variant="gradient" color="gray">
              <span>Tahrirlash</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      {/* Add pdb modal */}
      <div>
        <Dialog open={addModal} handler={closeAddModal}>
          <DialogHeader className="flex items-center justify-between">Brigader qo'shish
            <XMarkIcon className="cursor-pointer" onClick={closeAddModal} width={20} />
          </DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input onChange={addRegEx} id="addname" label="Brigadalar" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Input onChange={addRegEx} id="addlastname" label="F.I.O" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Select onChange={(e) => {
                  setpdId(e)
                }} label="Bo'linma tanlang">
                  {
                    pdUsers ? pdUsers.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name}</Option>
                    ) : (
                      <Option>Malumot yo</Option>
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
            <span className={regEX ? 'cursor-not-allowed' : ''}>
              <Button
                disabled={regEX}
                onClick={addPdb}
                variant="gradient" color="gray">
                <span>Qo'shish</span>
              </Button>
            </span>
          </DialogFooter>
        </Dialog>
      </div>
      {/* Delete pdb modal
      <div>
        <Dialog open={deleteModal} handler={closeDeleteModal}>
          <DialogHeader>O'chirish</DialogHeader>
          <DialogBody>
            <div className="flex justify-center">
              <Typography
                variant="large"
                className=" font-bold uppercase text-blue-gray-400">
                PDB ni o'chirishingizga ishonchingiz komilmi?
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
            <Button
            onClick={deletePDB}
            variant="gradient" color="gray">
              <span>Ha</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div> */}


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
    </div>
  );
}

