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
import { MapPinIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { api, byId, config, setConfig } from "@/api/api";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export function Observes() {
  const [observers, setObservers] = useState(null);
  const [pd, setPD] = useState(null);
  const [pdbs, setPdbs] = useState(null);
  const [pdbId, setPDBid] = useState(null);
  const [observersData, setObserversData] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [textError, setTextError] = useState(false);
  const [observesRegEx, setObservesRegEx] = useState(true)
  const [validat, setValidat] = useState(false)

  const openAddModal = () => setAddModal(true)
  const closeAddModal = () => {
    setTextError(false)
    setObservesRegEx(true)
    setAddModal(false)
    setValidat(false)
    setPDBid(null)
  }
  const openEditModal = () => {
    setEditModal(true)
    obsevesRegEx()
  }
  const closeEditModal = () => {
    setTextError(false)
    setValidat(false)
    setObservesRegEx(true)
    setEditModal(false)
    setPDBid(null)
  }
  const openDeleteModal = () => setDeleteModal(true)
  const closeDeleteModal = () => {
    setTextError(false)
    setDeleteModal(false)
  }

  useEffect(() => {
    setConfig()
    getObservers()
    getPD()
  }, [])

  // get observers
  const getObservers = () => {
    axios.get(`${api}observers`, config)
      .then((res) => setObservers(res.data.body))
      .catch(() => console.log('observers get error'))
  }

  // get pd
  const getPD = () => {
    axios.get(`${api}pd/all`, config)
      .then(res => {
        if (res.data.success === true) setPD(res.data.body)
        else setPD(null)
      })
      .catch(() => console.log('pd error'))
  }

  // *******************GET PDB **********************
  const getPDB = (id) => {
    if (id) {
      axios.get(`${api}pdb/list?pdId=${id}`, config)
        .then((res) => setPdbs(res.data.body))
        .catch(() => console.log('xatolik'))
    } else setPdbs(null)
  }

  const data = () => {
    const addData = {
      km: byId("addKm"),
      userFullName: byId("addObservers"),
      pdbId: pdbId,
    }

    if (addData.km && addData.pdbId && addData.userFullName) return addData
    else return null
  }

  // *******************ADD USER **********************
  const addObservers = () => {
    if (data()) {
      axios.post(`${api}observers`, data(), config)
        .then((res) => {
          if (res.data.success === true) {
            closeAddModal();
            getObservers();
            toast.success("Kuzatuvchi muoffaqqiyatli qo'shildi!👌");
          } else toast.error("Kuzatuvchi qo'shilmadi❌");
          setTextError(false)
        })
        .catch(() => {
          closeAddModal();
          setTextError(false)
          toast.error("Kuzatuvchi qo'shilmadi❌");
        })
    } else {
      setValidat(true)
    }
  };

  // *******************EDIT USER **********************
  const editObservers = () => {
    if (data() && observersData) {
      axios.put(`${api}observers?id=${observersData.id}`, data(), config)
        .then((res) => {
          if (res.data.success === true) {
            closeEditModal();
            getObservers();
            toast.success("Kuzatuvchi muvoffaqqiyatli tahrirlandi!👌");
          } else toast.error("Kuzatuvchi tahrirlanmadi❌");
          setTextError(false)
        })
        .catch(() => {
          closeEditModal();
          setTextError(false)
          toast.error("Kuzatuvchi tahrirlanmadi❌");
        })
    } else  setValidat(true)
  };

  // *******************DELETE USER **********************
  const deleteObservers = () => {
    if (observersData) {
      axios.delete(`${api}observers?id=${observersData.id}`, config)
        .then(() => {
          closeDeleteModal()
          getObservers()
          toast.success("Kuzatuvchi muvoffaqqiyatli o'chirildi!👌")
        })
        .catch(() => {
          toast.error("Kuzatuvchi o'chirilmadi")
          closeDeleteModal()
        })
    } else setTextError(false)
  }

  // Observes RegEx

  const obsevesRegEx = () => {
    // Bosh va oraliq probellarni olib tashlash uchun trim() metodidan foydalanish
    const editPDValue = document.getElementById("addObservers").value.trim();
    const employeeCountValue = document.getElementById("addKm").value.trim();

    // Har ikkala qiymat ham bo'sh emasligini tekshirish
    if (editPDValue !== "" && employeeCountValue !== "") {
      setObservesRegEx(false); // Agar har ikkala qiymat ham bo'sh emas bo'lsa, regex state'ini false qilib o'rnatish
    } else {
      setObservesRegEx(true);  // Aks holda, regex state'ini true qilib o'rnatish
    }
  }
  return (
    <div className="mt-7 mb-8 flex flex-col gap-12 ">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
          <Typography variant="h6" color="white">
            Kuzatuv Jadvali
          </Typography>
          <Button
            onClick={openAddModal}
            className="bg-[#fff] text-black px-3 py-2 rounded-md"
          >
            <UserIcon className="h-6 w-6 text-black inline-block" /> +
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] ">
            <thead>
              <tr>
                {["#", "F.I.O", "Km", "Amallar"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >{el}</Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {observers ?
                observers.map((item, i) => {
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
                        <Typography
                          onClick={() => {
                            openEditModal()
                            setObserversData(item)
                          }}
                          className=" cursor-pointer text-xs font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600">
                          <FaEdit className={'text-[1.2rem]'} />
                        </Typography>
                        <Typography
                          onClick={() => {
                            setObserversData(item)
                            openDeleteModal()
                          }}
                          className=" cursor-pointer text-xs font-semibold hover:text-red-300 duration-150 ease-in-out   text-blue-gray-600">
                          <MdDelete className={'text-[1.2rem]'} />
                        </Typography>
                      </td>
                    </tr>
                  )
                }
                ) :
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <Typography
                      className=" cursor-pointer text-md font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                      Malumot yo'q
                    </Typography></td>
                  <td></td>
                </tr>
              }
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* add modal */}
      <Dialog open={addModal} handler={closeAddModal}>
        <DialogHeader className="flex items-center justify-between">Kuzatuvchi qo'shish
          <XMarkIcon className="cursor-pointer" onClick={closeAddModal} width={20} />
        </DialogHeader>
        <DialogBody>
          <div className="flex justify-center flex-col items-center gap-7">
            <div className="w-full max-w-[24rem]">
              <Input type="text" onChange={obsevesRegEx} id="addObservers" label="Ism va familiya" />
            </div>
            <div className="w-full max-w-[24rem]">
              <Input type="text" onChange={obsevesRegEx} id="addKm" label="Km" />
            </div>
            <div className="w-full max-w-[24rem] flex flex-col gap-7">
              <Select
                onChange={(e) => getPDB(e)}
                className={`${validat ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                label="Bo'linma nomini tanlang">
                {pd && pd.length !== 0 ?
                  pd.map(item =>
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ) : <Option disabled>Malumot yo'q</Option>
                }
              </Select>
              <Select
                onChange={(e) => setPDBid(e)}
                className={`${validat ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                label="Brigadani tanlang">
                {pdbs && pdbs.length !== 0 ?
                  pdbs.map(item =>
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ) : <Option disabled>Malumot yo'q</Option>
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
          <span className={observesRegEx ? 'cursor-not-allowed' : ''}>
            <Button disabled={observesRegEx} onClick={addObservers} variant="gradient" color="gray">
              <span>Qo'shish</span>
            </Button>
          </span>
        </DialogFooter>
      </Dialog>

      {/* edit modal */}
      <Dialog open={editModal} handler={closeEditModal}>
        <DialogHeader className="flex items-center justify-between">Tahrirlash
          <XMarkIcon className="cursor-pointer" onClick={closeEditModal} width={20} />
        </DialogHeader>
        <DialogBody>
          <div className="flex justify-center flex-col items-center gap-7">
            <div className="w-full max-w-[24rem]">
              <Input
                defaultValue={observersData ? observersData.userFullName : "Malumot yo'q"}
                onChange={obsevesRegEx}
                type="text"
                required
                id="addObservers"
                label="Ism va familiya"
              />
            </div>
            <div className="w-full max-w-[24rem]">
              <Input
                defaultValue={observersData ? observersData.km : "Malumot yo'q"}
                onChange={obsevesRegEx}
                type="text"
                required
                id="addKm"
                label="Km"
              />
            </div>
            <div className="w-full max-w-[24rem] flex flex-col gap-7">
              <Select
                onChange={(e) => getPDB(e)}
                className={`${validat ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                label="Bo'linma nomini tanlang">
                {pd && pd.length !== 0 ?
                  pd.map(item =>
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ) : <Option disabled>Malumot yo'q</Option>
                }
              </Select>
              <Select
                onChange={(e) => {
                  setPDBid(e)
                  obsevesRegEx()
                }}

                className={`${validat ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                label="Brigadanini tanlang">
                {pdbs && pdbs.length !== 0 ?
                  pdbs.map(item =>
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ) : <Option disabled>Malumot yo'q</Option>
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
            Orqaga
          </Button>
          <span className={observesRegEx ? 'cursor-not-allowed' : ''}>
            <Button disabled={observesRegEx} onClick={editObservers} variant="gradient" color="gray">
              <span>Tahrirlash</span>
            </Button>
          </span>
        </DialogFooter>
      </Dialog>

      {/* delete */}
      <Dialog open={deleteModal} handler={closeDeleteModal}>
        <DialogHeader>O'chirish</DialogHeader>
        <DialogBody>
          <div className="flex justify-center">
            <Typography
              variant="large"
              className=" font-bold uppercase text-blue-gray-400">
              Bu kuzatuvchini o'chirishingizga ishonchingiz komilmi?
            </Typography>
            <Typography>{textError ? 'O\'chirishda xatolik yuz berdi' : ''}</Typography>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={closeDeleteModal}
            className="mr-1"
          >Yo'q</Button>
          <Button
            onClick={deleteObservers}
            variant="gradient"
            color="gray">Ha</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
