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
import { MapPinIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { api, byId, config, setConfig } from "@/api/api";
import toast from "react-hot-toast";

export function AddLocation() {
  const [km, setkm] = useState(null)
  const [users, setUsers] = useState(null)
  const [pdbId, setPDBid] = useState(null)
  const [kmData, setkmData] = useState(null)
  const [editModal, setEditModal] = useState(false)
  // const [deleteModal, setDeleteModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [regex, setRegex] = useState(true)



  const logoAdd = () => {
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
    </svg>
  }

  const openEditModal = () => setEditModal(true)
  const closeEditModal = () => {
    setEditModal(false)
    setRegex(true)
  }
  // const openDeleteModal = () => setDeleteModal(true)
  // const closeDeleteModal = () => setDeleteModal(false)
  const openAddModal = () => setAddModal(true)
  const closeAddModal = () => {
    setAddModal(false)
    setRegex(true)
  }

  useEffect(() => {
    setConfig()
    getkm()
    getUser()
  }, [])




  // *******************GET PDB **********************


  const getUser = () => {
    axios.get(`${api}pdb`, config)
      .then((res) => {
        setUsers(res.data.body);
      })
      .catch((err) => console.log(err))
  }


  // *******************GET USER **********************


  const getkm = () => {
    axios.get(`${api}railway/list/in/pd`, config)
      .then((res) => {
        setkm(res.data.body);
      })
      .catch((err) => console.log('thdrhgd'))
  }

  // *******************ADD USER **********************

  const addkm = () => {
    const addData = {
      km: byId("addkm"),
      pdbId: pdbId
    }
    axios.post(`${api}railway`, addData, config)
      .then((res) => {
        closeAddModal()
        getkm()
        toast.success("Ish quroli muoffaqqiyatli qo'shildi!👌")
      })
      .catch((err) => {
        closeAddModal()
        toast.error("Ish quroli qo'shilmadi❌")

        console.log(err);
      })
  }



  // *******************EDIT USER **********************


  const editkm = () => {
    const editData = {
      km: byId("editkm"),
      pdbId: pdbId
    }
    axios.put(`${api}railway?id=${kmData ? kmData.id : 0}`, editData, config)
      .then((res) => {
        closeEditModal()
        getkm()
        toast.success("Ish quroli muvoffaqqiyatli tahrirlandi!👌")

      })
      .catch((err) => {
        toast.error("Ish quroli tahrirlanmadi❌")
        console.log(err)
        closeEditModal()
      })
  }

  // *******************DELETE USER **********************

  // const deletekm = () => {
  //   axios.delete(`${api}railway/delete?id=${kmData ? kmData.id : 0}`, config)
  //     .then(() => {
  //       closeDeleteModal()
  //       getkm()
  //       toast.success("Ish quroli muvoffaqqiyatli o'chirildi!👌")

  //     })
  //     .catch((err) => {
  //       toast.error("Ish quroli o'chirilmadi")
  //       console.log(err);
  //       closeDeleteModal()
  //     })

  // }



  // ******************* REGEX **********************

  const addRegex = () => {
    if (
      byId("addkm") !== ""
    ) {
      setRegex(false)
    }
    else {
      setRegex(true)
    }
  }

  const editRegex = () => {
    if (
      byId("editkm") !== ""
    ) {
      setRegex(false)
    }
    else {
      setRegex(true)
    }
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 ">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
          <Typography variant="h6" color="white">
            Km Jadvali
          </Typography>
          <Button
            onClick={openAddModal}
            className="bg-[#fff] text-black px-3 py-2 rounded-md"
          // onClick={handleOpenModal} // Attach event handler to open modal
          >
            <MapPinIcon className="h-6 w-6 text-black inline-block" /> +
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["KM", "PDB", "Harakatlar"].map((el) => (
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

              {km ? km.map((item, i) => {
                const className = `py-3 px-5  ${i === km && km.length - 1
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
                            {item.km}
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
                            {item.pdbName}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={`${className} flex py-5 gap-3`}>
                      <Typography onClick={() => {
                        openEditModal()
                        setkmData(item)
                        console.log(item);
                      }} className=" cursor-pointer text-xs font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600">
                        Tahrirlash
                      </Typography>
                      {/* <Typography onClick={() => {
                        openDeleteModal()
                        setkmData(item)
                      }} className=" cursor-pointer text-xs font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                        O'chirish
                      </Typography> */}
                    </td>
                  </tr>
                )
              }
              ) :
                <tr>
                  <td></td>
                  <td className="text-center">
                  <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            Malumot yo'q
                          </Typography></td></tr>}
              <td></td>
            </tbody>
          </table>
        </CardBody>
      </Card>
      {/* <div className="w-full flex justify-center items-center">
      <CircularPagination/>
      </div> */}
      <div>

        {/* edit modal */}
        <Dialog open={editModal} handler={closeEditModal}>
          <DialogHeader>Tahrirlash</DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input type="number" onChange={editRegex} required defaultValue={kmData ? kmData.km : "Ma'lumot yo'q"} id="editkm" label="km nomi" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Select onChange={(e) => {
                  setPDBid(e)
                  editRegex()
                }} label="PDB">
                  {
                    users && users.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name} {item.lastName}</Option>
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

              <Button disabled={regex} onClick={editkm} variant="gradient" color="gray">
                <span>Tahrirlash</span>
              </Button>
            </span>
          </DialogFooter>
        </Dialog>
      </div>
      <div>

        {/* add modal */}

        <Dialog open={addModal} handler={closeAddModal}>
          <DialogHeader>Ish quroli qo'shish</DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input type="number" onChange={addRegex} required id="addkm" label="Ish quroli nomi" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Select onChange={(e) => {
                  setPDBid(e)
                  editRegex()
                }} label="PDB">
                  {
                    users && users.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name} {item.lastName}</Option>
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
              <Button disabled={regex} onClick={addkm} variant="gradient" color="gray">
                <span>Qo'shish</span>
              </Button>
            </span>
          </DialogFooter>
        </Dialog>
      </div>
      {/* <div>
        delete modal
        <Dialog open={deleteModal} handler={closeDeleteModal}>
          <DialogHeader>O'chirish</DialogHeader>
          <DialogBody>
            <div className="flex justify-center">
              <Typography
                variant="large"
                className=" font-bold uppercase text-blue-gray-400">
                Bu ish qurolini o'chirishingizga ishonchingiz komilmi?
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
            <Button onClick={deletekm} variant="gradient" color="gray">
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
                          <kmtip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </kmtip>
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

