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
} from "@material-tailwind/react";
import { UserPlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { api, byId, config, setConfig } from "@/api/api";
import axios from "axios";
import toast from "react-hot-toast";

export function Tables() {
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [pdbUsers, setPdbaUsers] = useState(null)
  const [pdbData, setpdbdata] = useState(null)


  const openEditModal = () => setEditModal(true)
  const closeEditModal = () => setEditModal(false)
  const openDeleteModal = () => setDeleteModal(true)
  const closeDeleteModal = () => setDeleteModal(false)
  const openAddModal = () => setAddModal(true)
  const closeAddModal = () => setAddModal(false)

  useEffect(() => {
    setConfig()
    getPDBuser();
  }, [])

  const getPDBuser = () => {
    axios.get(`${api}pdb`, config)
      .then((res) => {
        setPdbaUsers(res.data.body)
      })
      .catch((err) => {
      })
  }

  // ----------PDB add------------
  const addPdb = () => {
    const addPDBdata = {
      name: byId("addname"),
      userFullName: byId("addlastname"),
    }
    axios.post(`${api}pdb`, addPDBdata, config)
      .then((res) => {
        closeAddModal();
        getPDBuser()
        toast.success("Vazifa muvoffaqqiyatli bajarildi!")
      })
      .catch((err) => {
        closeAddModal();
        toast.error("Xato");
      })
  }

  // ----------PDB edit------------
  const editPDB = () => {
    const editPDbdata = {
      name: byId("editName"),
      userFullName: byId("editlastname"),
    }
    axios.put(`${api}pdb?id=${pdbData ? pdbData.id:0}`, editPDbdata, config)
      .then((res) => {
        closeEditModal();
        getPDBuser()
        toast.success("Tahrirlandi!")
      })
      .catch((err) => {
        closeEditModal();
        toast.error("PDB tahrirlanmadi");
      })
  }

    // *******************DELETE USER **********************

    // const deletePDB = () => {
    //   axios.delete(`${api}pdb/delete?id=${pdbData ? pdbData.id : 0}`,config)
    //     .then((res) => {
    //       closeDeleteModal()
    //       getPDBuser()
    //       toast.success("PDB muvoffaqqiyatli o'chirildi!👌")

    //     })
    //     .catch((err) => {
    //       closeDeleteModal()
    //       toast.error("PDB o'chirilmadi!❌")
    //     })

    // }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 ">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
          <Typography variant="h6" color="white">
            PDB lar jadvali
          </Typography>
          <Button
            onClick={openAddModal}
            className="bg-[#fff] text-black px-3 py-2 rounded-md"
          >
            <UserPlusIcon className="h-6 w-6 text-black" />
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["First name", "Last name", "Actions"].map((el) => (
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
              {pdbUsers && pdbUsers.map(
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
                        }} className=" cursor-pointer text-xs font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600">
                          Edit
                        </Typography>

                      </td>
                    </tr>
                  );
                }
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
          <XMarkIcon className="cursor-pointer" onClick={closeEditModal} width={20}/>
</DialogHeader>
        </div>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input defaultValue={pdbData ? pdbData.name : "Ma'lumot yo'q"} id="editName" label="PDB nomi" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Input defaultValue={pdbData ? pdbData.userFullName : "Ma'lumot yo'q"} id="editlastname" label="Admin Ism familya" />
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
          <DialogHeader className="flex items-center justify-between">PDB qo'shish
          <XMarkIcon className="cursor-pointer" onClick={closeAddModal} width={20}/>
          </DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input id="addname" label="Nomi" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Input id="addlastname" label="Admin Ism , familya" />
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
            <Button
              onClick={addPdb}
              variant="gradient" color="gray">
              <span>Qo'shish</span>
            </Button>
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

