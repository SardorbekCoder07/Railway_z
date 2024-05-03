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
import { MapPinIcon, XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { api, byId, config, setConfig } from "@/api/api";
import toast from "react-hot-toast";

export function Observes() {
  const [observers, setObservers] = useState(null);
  const [users, setUsers] = useState(null);
  const [pdbId, setPDBid] = useState(null);
  const [observersData, setObserversData] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [regex, setRegex] = useState(true);
  const [loading, setLoading] = useState(false);




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
  const openDeleteModal = () => setDeleteModal(true)
  const closeDeleteModal = () => setDeleteModal(false)
  const openAddModal = () => setAddModal(true)
  const closeAddModal = () => {
    setAddModal(false)
    setRegex(true)
  }

  useEffect(() => {
    setConfig()
    getObservers()
    getUser()
  }, [])




  // *******************GET PDB **********************


  const getUser = () => {
    axios.get(`${api}pdb`, config)
      .then((res) => {
        setUsers(res.data.body);
      })
      .catch((err) => { })
  }


  // *******************GET USER **********************


  const getObservers = () => {
    axios.get(`${api}observers`, config)
      .then((res) => {
        setObservers(res.data.body);
      })
      .catch((err) => { })
  }

  // *******************ADD USER **********************

  const addObservers = () => {
    setLoading(true);
    const addData = {
      km: byId("addKm"),
      userFullName: byId("addObservers"),
      pdbId: pdbId,
    };
    axios
      .post(`${api}observers`, addData, config)
      .then(() => {
        closeAddModal();
        getObservers();
    setLoading(true);
    toast.success("Kuzatuvchi muoffaqqiyatli qo'shildi!👌");
      })
      .catch((err) => {
        closeAddModal();
    setLoading(false);
    toast.error("Kuzatuvchi qo'shilmadi❌");
        ;
      })
      .finally(() => {
        setLoading(false);
      });
  };



  // *******************EDIT USER **********************


  const editObservers = () => {
    setLoading(true);
    const editData = {
      km: byId("editKm"),
      userFullName: byId("editObservers"),
      pdbId: pdbId,
    };
    axios
      .put(`${api}observers?id=${observersData ? observersData.id : 0}`, editData, config)
      .then(() => {
        closeEditModal();
    setLoading(false);
    getObservers();
        toast.success("Kuzatuvchi muvoffaqqiyatli tahrirlandi!👌");
      })
      .catch((err) => {
        toast.error("Kuzatuvchi tahrirlanmadi❌");
    setLoading(false);
    closeEditModal();
      })
  };
  // *******************DELETE USER **********************

  const deleteObservers = () => {
    axios.delete(`${api}observers?id=${observersData ? observersData.id : 0}`, config)
      .then(() => {
        closeDeleteModal()
    setLoading(false);
    getObservers()
        toast.success("Kuzatuvchi muvoffaqqiyatli o'chirildi!👌")

      })
      .catch((err) => {
    setLoading(false);
    toast.error("Kuzatuvchi o'chirilmadi")
        closeDeleteModal()
      })

  }

  // ******************* REGEX **********************

  const addRegex = () => {
    if (
      byId("addKm") !== "" &&
      byId("addObservers")
    ) {
      setRegex(false)
    }
    else {
      setRegex(true)
    }
  }

  const editRegex = () => {
    if (
      byId("editKm") !== "" &&
      byId("addObservers")
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
            Kuzatuv Jadvali
          </Typography>
          <Button
            onClick={openAddModal}
            className="bg-[#fff] text-black px-3 py-2 rounded-md"
          >
            <MapPinIcon className="h-6 w-6 text-black inline-block" /> +
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["#", "Ism familiyasi", "Km", "Harakatlar"].map((el) => (
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

              {observers ? observers.map((item, i) => {
                const className = `py-3 px-5  ${i === observers && observers.length - 1
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
                            {item.userFullName}
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
                            {item.km}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={`${className} flex py-5 gap-3`}>
                      <Typography onClick={() => {
                        openEditModal()
                        setObserversData(item)
                      }} className=" cursor-pointer text-xs font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600">
                        Tahrirlash
                      </Typography>
                      <Typography onClick={() => {
                        setObserversData(item)
                        openDeleteModal()
                      }} className=" cursor-pointer text-xs font-semibold hover:text-red-300 duration-150 ease-in-out   text-blue-gray-600">
                        O'chirish
                      </Typography>
                    </td>

                  </tr>
                )
              }
              ) :
                <tr>
                  <td></td>
                  <td></td>
                  <td className="">
                    <Typography className=" cursor-pointer text-md font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                      Malumot yo'q
                    </Typography></td>
                  <td></td>

                </tr>}
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
          <DialogHeader className="flex items-center justify-between">Tahrirlash
            <XMarkIcon className="cursor-pointer" onClick={closeEditModal} width={20} />
          </DialogHeader>
          <DialogBody>
          <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input defaultValue={observersData ? observersData.userFullName : "Malumot yo'q"} type="text" onChange={addRegex} required id="editObservers" label="Ism va familiya" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Input defaultValue={observersData ? observersData.km : "Malumot yo'q"} type="text" onChange={addRegex} required id="editKm" label="Km" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Select onChange={(e) => {
                  setPDBid(e)
                  addRegex()
                }} label="PDB">
                  {
                    users && users.length !== 0 ? users.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name} {item.lastName}</Option>
                    ) :
                    <Option>Malumot yo'q</Option>

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

              <Button disabled={regex} onClick={editObservers} variant="gradient" color="gray">
                <span>Tahrirlash</span>
              </Button>
            </span>
          </DialogFooter>
        </Dialog>
      </div>
      <div>

        {/* add modal */}

        <Dialog open={addModal} handler={closeAddModal}>
          <DialogHeader className="flex -items-center justify-between">Kuzatuvchi qo'shish
            <XMarkIcon className="cursor-pointer" onClick={closeAddModal} width={20} />
          </DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input type="text" onChange={addRegex} required id="addObservers" label="Ism va familiya" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Input type="text" onChange={addRegex} required id="addKm" label="Km" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Select onChange={(e) => {
                  setPDBid(e)
                  addRegex()
                }} label="PDB">
                  {
                    users && users.length !== 0 ? users.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name} {item.lastName}</Option>
                    ) :
                    <Option>Malumot yo'q</Option>

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
              <Button disabled={regex} onClick={addObservers} variant="gradient" color="gray">
                <span>Qo'shish</span>
              </Button>
            </span>
          </DialogFooter>
        </Dialog>
      </div>
{/* delete */}
      <div>
        <Dialog open={deleteModal} handler={closeDeleteModal}>
          <DialogHeader>O'chirish</DialogHeader>
          <DialogBody>
            <div className="flex justify-center">
              <Typography
                variant="large"
                className=" font-bold uppercase text-blue-gray-400">
                Bu kuzatuvchini o'chirishingizga ishonchingiz komilmi?
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
            onClick={deleteObservers}
            variant="gradient" color="gray">
              <span>Ha</span>
            </Button>
          </DialogFooter>
        </Dialog>
        </div>
    </div>
  );
}

