import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { CheckCircleIcon, UserPlusIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { api, config, setConfig } from "@/api/api";
import axios from "axios";
import { getDayPlan, getPdb, getPk, getRailway } from "./apiFunction";

export function Hisobot() {
  const [elseModal, setElseModal] = useState(false);
  const [toolModal, setToolModal] = useState(false);
  const [todayModal, setTodayModal] = useState(false);
  const [tomorrowModal, setTomorrowModal] = useState(false);
  const [dayPlan, setDayPlan] = useState(false)
  const [pdb, setPdb] = useState(null)
  const [Pk, setPk] = useState(null)
  const [railway, setRailway] = useState(null)

  useEffect(() => {
    setConfig()
    getPdb(setPdb)
  }, [])



  const openElseModal = () => {
    setElseModal(true);
  };

  const closeElseModal = () => {
    setElseModal(false);
  };
  const openToolModal = () => {
    setToolModal(true);
  };

  const closeToolModal = () => {
    setToolModal(false);
  };

  const handleOpenTodayModal = () => {
    setTodayModal(true);
  };

  const handleCloseTodayModal = () => {
    setTodayModal(false);
  };

  const handleOpenTomorrowModal = () => {
    setTomorrowModal(true);
  };

  const handleCloseTomorrowModal = () => {
    setTomorrowModal(false);
  };

  return (
    <div className="mt-12">

      <div className="mb-6 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
            <Typography variant="h6" color="white">
              Dashboard
            </Typography>

          </CardHeader>
          <CardBody className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              <div className="w-full max-w-[24rem]">
                <Select onChange={(e) => {
                  getRailway(e, setRailway)
                }} label="PD admini">
                  {
                    pdb ? pdb.map((item, i) =>
                      <Option key={i} value={item.id}>{item.name}</Option>) : (
                      <Option>Malumot yo'q</Option>
                    )
                  }
                </Select>

              </div>
              <div className="w-full max-w-[24rem]">
                <Select onChange={(e) => {
                  getPk(e, setPk)
                  console.log(Pk);
                }} label="PD admini">
                  {
                    railway ? railway.map((item, i) =>
                      <Option key={i} value={item.id}>{item.km}</Option>) : (
                      <Option disabled >Malumot yo'q</Option>
                    )
                  }
                </Select>

              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                      <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                        N/o
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                      <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                        PD
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                      <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                        Ma'lumotlar
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                      <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                        Ish jarayonida
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Pk ? Pk.map((item, i) =>
                      <tr>
                        <td className="border-b border-blue-gray-200 py-3 px-5">
                          {i + 1}
                        </td>
                        <td className="border-b border-blue-gray-200 py-3 px-5">
                          <div className="flex items-center gap-4">
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            <span>{item.name}</span>
                          </div>
                        </td>
                        <td className="border-b border-blue-gray-200 py-3 px-5">
                          <div className="flex items-center gap-2">

                            <Button onClick={() => {
                              getDayPlan(item.id, setDayPlan)
                              handleOpenTodayModal()
                            }} disabled={!item.dayPlanIsActive} >Bugungi</Button>
                            <Button onClick={() => {
                              getDayPlan(item.id, setDayPlan)
                              handleOpenTomorrowModal()
                            }} disabled={!item.dayPlanIsActive} >Ertangi</Button>
                            <Button onClick={() => {
                              getDayPlan(item.id, setDayPlan)
                              console.log(dayPlan);
                              openToolModal()
                            }} disabled={!item.dayPlanIsActive} >Ish qurollar</Button>
                            <Button onClick={() => {
                              getDayPlan(item.id, setDayPlan)
                              openElseModal()
                            }} disabled={!item.dayPlanIsActive} >Qo'shimcha</Button>
                          </div>

                        </td>
                        <td className="border-b border-blue-gray-200 py-3 px-5">
                          {
                            item.dayPlanIsActive ? (
                              <div className="flex items-center justify-center gap-2">
                                ✔
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-2">
                                ✖
                              </div>
                            )
                          }



                        </td>

                      </tr>
                    ) : (
                      <tr>
                        <td className="py-3">
                          <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                            Ma'lumotlar topilmadi❌
                          </Typography>
                        </td>
                      </tr>
                    )
                  }

                  {/* Additional rows go here */}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
        {/* <div className="mt-8 w-full flex justify-center items-center">
          <CircularPagination />
        </div> */}
      </div>
      {/* TODAY PLAN */}
      <Dialog open={todayModal} onClose={handleCloseTodayModal}>
        <DialogHeader className="flex items-center justify-between">Bugungi ishlar
        <XMarkIcon className="cursor-pointer" onClick={handleCloseTodayModal} width={20}/>
</DialogHeader>
        <DialogBody>
          <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">{dayPlan ? dayPlan.todayPlan : "Malumot mavjud emas"}</Typography>
        </DialogBody>
        <DialogFooter>
          <Button onClick={handleCloseTodayModal}>Close Modal</Button>
        </DialogFooter>
      </Dialog>

      {/* TOMORROW PLAN */}
      <Dialog open={tomorrowModal} onClose={handleCloseTomorrowModal}>
        <DialogHeader className="flex items-center justify-between">Ertangi ishlar
        <XMarkIcon className="cursor-pointer" onClick={handleCloseTomorrowModal} width={20}/>
</DialogHeader>
        <DialogBody>
          <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">{dayPlan ? dayPlan.tomorrowPlan : "Malumot mavjud emas"}</Typography>
        </DialogBody>
        <DialogFooter>
          <Button onClick={handleCloseTomorrowModal}>Close Modal</Button>
        </DialogFooter>
      </Dialog>

      {/* TOOLS */}
      <Dialog open={toolModal} onClose={closeToolModal}>
        <DialogHeader className="flex items-center justify-between">Ish qurollari
        <XMarkIcon className="cursor-pointer" onClick={closeToolModal} width={20}/>
</DialogHeader>
        <DialogBody>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {
              dayPlan && dayPlan.resDayTools.length !== 0 && dayPlan.resDayTools.map((item, i) =>
                <div className="flex justify-around">
                  <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                    {item.resWorkToolNamd}
                  </Typography>
                  <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                    {item.count}
                  </Typography>
                </div>
              )
            }
          </div>
        </DialogBody>
        <DialogFooter>
          <Button onClick={closeToolModal}>Close Modal</Button>
        </DialogFooter>
      </Dialog>

      {/* ELSE PLAN */}
      <Dialog size="lg" open={elseModal} onClose={closeElseModal}>
        <DialogHeader className="flex items-center justify-between">Qo'shimcha malumotlar
        <XMarkIcon className="cursor-pointer" onClick={closeElseModal} width={20}/>

        </DialogHeader>
        <DialogBody className="">
          <div className="overflow-y-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-4">
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Ishchilar soni:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.employeeCount : "Malumot yo'q"}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Bemorlar soni:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.sickCount : "Malumot yo'q"}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Ishdan javob olganlar soni:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.restCount : "Malumot yo'q"}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Komandirofkadagilar soni:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.tripCount : "Malumot yo'q"}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Dam oluvchilar soni:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.vacationCount : "Malumot yo'q"}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Malaka oshirishdagilar soni:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.onTrainingCount : "Malumot yo'q"}
                </Typography>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-4 mt-4">
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Rels uzatgichlari ST:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.relayConnectorsST : "Malumot yo'q"}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Rels uzatgichlari PR:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.relayConnectorsPR : "Malumot yo'q"}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Ximoya sticklari ST:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.protectionStackST : "Malumot yo'q"}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-black">
                  Ximoya sticklari PR:
                </Typography>
                <Typography variant="small" className="text-sm text-center font-bold uppercase text-blue-gray-500">
                  {dayPlan ? dayPlan.protectionStackPR : "Malumot yo'q"}
                </Typography>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button onClick={closeElseModal}>Close Modal</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Hisobot;
