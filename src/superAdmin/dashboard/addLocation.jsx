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
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export function AddLocation() {
  const [km, setkm] = useState(null);

  const [users, setUsers] = useState(null);
  const [usersValid, setusersValid] = useState(false);

  const [pdbId, setPDBid] = useState(null);

  const [kmData, setkmData] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [regex, setRegex] = useState(true);
  const [pdUsers, setPdUsers] = useState(null);
  const [selectPdbId, setSelectPdbId] = useState(null);


  const openEditModal = () => {
    setEditModal(true)

  }
  const closeEditModal = () => {
    setEditModal(false)
    setRegex(true)

  }
  const openAddModal = () => {
    setAddModal(true)
    setPDBid(null)
    setusersValid(false)
  }
  const closeAddModal = () => {
    setAddModal(false)
    setRegex(true)
    setPDBid(null)
  }

  useEffect(() => {
    setConfig()
    // getkm()
    getPD()
  }, [])




  const getPD = () => {
    axios.get(`${api}pd/all`, config)
      .then((res) => {
        setPdUsers(res.data.body);
      })
      .catch((err) => { })
  }


  // *******************GET PDB **********************


  const getUser = (id) => {
    axios.get(`${api}pdb/list?pdId=${id}`, config)
      .then((res) => {
        setUsers(res.data.body)
      })
      .catch((err) => {
      })
  }

  // *******************GET USER **********************


  const getkm = (id) => {
    axios.get(`${api}railway/list?pdbId=${id}`, config)
      .then((res) => {
        setkm(res.data.body);
      })
      .catch((err) => { })
  }

  // *******************ADD USER **********************

  const addkm = () => {
    const addData = {
      km: byId("addkm"),
      pdbId: pdbId,
    };

    if (pdbId) {
      axios
        .post(`${api}railway`, addData, config)
        .then((res) => {
          closeAddModal();
          getkm(selectPdbId);
          toast.success("Manzil muoffaqqiyatli qo'shildi!👌");
        })
        .catch((err) => {
          closeAddModal();
          toast.error("Manzil qo'shilmadi❌");
          ;
        })
    } else {
      toast.error("Bo'linmani tanlang ❗️");
      setusersValid(true)
    }

  };


  // *******************EDIT USER **********************


  const editkm = () => {
    const editData = {
      km: byId("editkm"),
      pdbId: pdbId,
    };
    if (pdbId) {
      axios
        .put(`${api}railway?id=${kmData ? kmData.id : 0}`, editData, config)
        .then((res) => {
          closeEditModal();
          getkm(selectPdbId);
          toast.success("Ish quroli muvoffaqqiyatli tahrirlandi!👌");
        })
        .catch((err) => {
          toast.error("Ish quroli tahrirlanmadi❌");
          closeEditModal();
        })
        .finally(() => {
        });
    } else {
      toast.error("Bo'linmani tanlang ❗️");
      setusersValid(true)
    }
  };


  // ******************* REGEX **********************


  const addRegex = () => {
    // Bosh va oraliq probellarni olib tashlash uchun trim() metodidan foydalanish
    const editPDValue = document.getElementById("addkm").value.trim();

    // Har ikkala qiymat ham bo'sh emasligini tekshirish
    if (editPDValue !== "") {
      setRegex(false); // Agar har ikkala qiymat ham bo'sh emas bo'lsa, regex state'ini false qilib o'rnatish
    } else {
      setRegex(true);  // Aks holda, regex state'ini true qilib o'rnatish
    }
  }

  const editRegex = () => {
    // Bosh va oraliq probellarni olib tashlash uchun trim() metodidan foydalanish
    const editPDValue = document.getElementById("editkm").value.trim();

    // Har ikkala qiymat ham bo'sh emasligini tekshirish
    if (editPDValue !== "") {
      setRegex(false); // Agar har ikkala qiymat ham bo'sh emas bo'lsa, regex state'ini false qilib o'rnatish
    } else {
      setRegex(true);  // Aks holda, regex state'ini true qilib o'rnatish
    }
  }


  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 ">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
          <Typography variant="h6" color="white">
            Yo'l Masofalari Jadvali
          </Typography>
          <Button
            onClick={openAddModal}
            className="bg-[#fff] text-black px-3 py-2 rounded-md"
          >
            <MapPinIcon className="h-6 w-6 text-black inline-block" /> +
          </Button>
        </CardHeader>
        <CardBody className=" px-0 pt-0 pb-2">
          <Typography variant="h6" color="gray" className="ml-10 mb-3">
            KM ma'lumotini olish uchun
          </Typography>
          <div className="w-full flex justify-center items-center gap-5 flex-col md:flex-row">
            <div className="w-full max-w-[20rem]">
              <Select onChange={(e) => { getUser(e); }} label="Bo'linmani tanlang">
                {
                  pdUsers ? pdUsers.map((item, i) =>
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ) : (
                    <Option disabled>Malumot yo'q</Option>
                  )
                }
              </Select>
            </div>
            <div className="w-full max-w-[20rem]">
              <Select onChange={(e) => { setSelectPdbId(e); getkm(e); }} label="Brigadani tanlang">
                {
                  users ? users.map((item, i) =>
                    <Option key={i} value={item.id}>{item.name}</Option>
                  ) : (
                    <Option disabled>Ma'lumot yo'q</Option>
                  )
                }
              </Select>
            </div>
          </div>

          <div className="overflow-x-auto"><table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["#", "KM", "Amallar"].map((el) => (
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
                            {item.km}
                          </Typography>
                        </div>
                      </div>
                    </td>


                    <td className={`${className} flex py-5 gap-3`}>
                      <Typography onClick={() => {
                        openEditModal()
                        setkmData(item)
                      }} className=" cursor-pointer text-[1.2rem] font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600">
                        <FaEdit />
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
                      Ma'lumot yo'q
                    </Typography></td>
                  <td></td>

                </tr>}
            </tbody>
          </table></div>

        </CardBody>
      </Card>
      <div>

        {/* edit modal */}
        <Dialog open={editModal} handler={closeEditModal}>
          <DialogHeader className="flex items-center justify-between">Tahrirlash
            <XMarkIcon className="cursor-pointer" onClick={closeEditModal} width={20} />
          </DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input type="number" onChange={editRegex} required defaultValue={kmData ? kmData.km : "Ma'lumot yo'q"} id="editkm" label="km nomi" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Select
                  className={`${usersValid ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                  onChange={(e) => {
                    getUser(e)
                  }} label="Bo'linmani tanlang">
                  {
                    pdUsers ? pdUsers.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name}</Option>
                    ) : (
                      <Option>Malumot yo'q</Option>
                    )
                  }
                </Select>
              </div>
              <div className="w-full max-w-[24rem]">
                <Select
                  className={`${usersValid ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                  onChange={(e) => {
                    setPDBid(e)
                  }} label="Brigadani tanlang">
                  {
                    users ? users.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name}</Option>
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
          <DialogHeader className="flex -items-center justify-between">KM qo'shish
            <XMarkIcon className="cursor-pointer" onClick={closeAddModal} width={20} />
          </DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input type="number" onChange={addRegex} required id="addkm" label="KM" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Select
                  className={`${usersValid ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                  onChange={(e) => {
                    getUser(e)
                  }} label="Bo'linmani tanlang">
                  {
                    pdUsers ? pdUsers.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name}</Option>
                    ) : (
                      <Option disabled>Malumot yo'q</Option>
                    )
                  }
                </Select>
              </div>
              <div className="w-full max-w-[24rem]">
                <Select
                  className={`${usersValid ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                  onChange={(e) => {
                    setPDBid(e)
                  }} label="PDB tanlang">
                  {
                    users ? users.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name}</Option>
                    ) : (
                      <Option disabled>Malumot yo'q</Option>
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
    </div>
  );
}

