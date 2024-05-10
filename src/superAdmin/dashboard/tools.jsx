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
import { WrenchScrewdriverIcon, XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { api, byId, config, setConfig } from "@/api/api";
import toast from "react-hot-toast";
import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa";

export function Tools() {
  const [tool, settool] = useState(null)
  const [users, setUsers] = useState(null)
  const [toolsData, settoolsData] = useState(null)
  const [ToolData, setToolData] = useState(null)
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
    gettool()
    getUser()
  }, [])




  // *******************GET USER **********************


  const getUser = () => {
    axios.get(`${api}user/leaders`, config)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {})
  }


  // *******************GET USER **********************


  const gettool = () => {
    axios.get(`${api}work-tool/work-tool`, config)
      .then((res) => {
        settool(res.data);
      })
      .catch((err) => {})
  }

  // *******************ADD USER **********************

  const addtool = () => {
    const addData = {
      name: byId("addtool")
    }
    axios.post(`${api}work-tool/add`, addData, config )
      .then((res) => {
        closeAddModal()
        gettool()
        toast.success("Ish quroli muoffaqqiyatli qo'shildi!👌")
      })
      .catch((err) => {
        closeAddModal()
        toast.error("Ish quroli qo'shilmadi❌")

        {};
      })
  }



  // *******************EDIT USER **********************


  const edittool = () => {
    const editData = {
      name: byId("edittool"),
    }
    axios.put(`${api}work-tool/edit?id=${ToolData ? ToolData.id : 0}`, editData, config)
      .then((res) => {
        closeEditModal()
        gettool()
        toast.success("Ish quroli muvoffaqqiyatli tahrirlandi!👌")

      })
      .catch((err) => {
        toast.error("Ish quroli tahrirlanmadi❌")
        {}
        closeEditModal()
      })
  }


  const deletetool = () => {
    axios.delete(`${api}work-tool/delete?id=${ToolData ? ToolData.id : 0}`, config)
      .then(() => {
        closeDeleteModal()
        gettool()
        toast.success("Ish quroli muvoffaqqiyatli o'chirildi!👌")

      })
      .catch((err) => {
        toast.error("Ish quroli o'chirilmadi")
        {};
        closeDeleteModal()
      })

  }




  const addRegex = () => {
    if (
      byId("addtool") !== ""
    ) {
      setRegex(false)
    }
    else {
      setRegex(true)
    }
  }

  const editRegex = () => {
    if (
      byId("edittool") !== ""
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
            Ish qurollar jadvali
          </Typography>
          <Button
            onClick={openAddModal}
            className="bg-[#fff] text-black px-3 py-2 rounded-md"
           >
            <WrenchScrewdriverIcon className="h-6 w-6 text-black inline-block" /> +
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["#","Ish quroli nomi", "Amallar"].map((el) => (
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

              {tool ? tool.map((item, i) => {
                const className = `py-3 px-5  ${i === tool && tool.length - 1
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
                              {i+1}
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

                    <td className={`${className} flex py-5 gap-3`}>
                      <Typography onClick={() => {
                        openEditModal()
                        setToolData(item)
                      }} className=" cursor-pointer text-[1.2rem] font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600">
                        <FaEdit/>
                      </Typography>
                      <Typography onClick={() => {
                        openDeleteModal()
                        setToolData(item)
                      }} className=" cursor-pointer text-[1.2rem] font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                        <MdDelete/>
                      </Typography>
                    </td>
                  </tr>
                )
              }
              ) : (
                <tr>
                  <td></td>
                  <td><Typography  className=" cursor-pointer text-center text-md font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                  Malumot yo'q
                </Typography></td>
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
          <DialogHeader className="flex items-center justify-between">Tahrirlash
          <XMarkIcon className="cursor-pointer" onClick={closeEditModal} width={20}/>
</DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input onChange={editRegex} required defaultValue={ToolData ? ToolData.name : "Ma'lumot yo'q"} id="edittool" label="Ish qurollar nomi" />
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

              <Button disabled={regex} onClick={edittool} variant="gradient" color="gray">
                <span>Tahrirlash</span>
              </Button>
            </span>
          </DialogFooter>
        </Dialog>
      </div>
      <div>

        {/* add modal */}



        <Dialog open={addModal} handler={closeAddModal}>
          <DialogHeader className="flex items-center justify-between">Ish quroli qo'shish
          <XMarkIcon className="cursor-pointer" onClick={closeAddModal} width={20}/>
</DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input onChange={addRegex} required id="addtool" label="Ish quroli nomi" />
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
                           <Button disabled={regex} onClick={addtool} variant="gradient" color="gray">
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
            <Button onClick={deletetool} variant="gradient" color="gray">
              <span>Ha</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>


    </div>
  );
}

