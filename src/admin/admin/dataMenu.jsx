import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  DialogFooter
} from "@material-tailwind/react";
import { StatisticsCard } from "@/admin/widgets/cards";
import { statisticsCardsData } from "@/admin/data";
import { CheckCircleIcon, ClockIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function MenuPk() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedKmIndex, setSelectedKmIndex] = useState(null);

  const openAddModal = () => setAddModal(true);
  const closeAddModal = () => setAddModal(false);
  const openDeleteModal = () => setDeleteModal(true);
  const closeDeleteModal = () => setDeleteModal(false);

  const handleKmButtonClick = (index) => {
    setSelectedKmIndex(index);
  };

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
          />
        ))}
      </div>
      <div className="mb-6 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-8 flex items-center justify-between p-6"
          >
            <div className="flex gap-5">
              <p>PK Menu</p>

              <p className="text-green-400 font-bold text-xl">#1 => 1456 km</p>
            </div>
            <Button
              onClick={openAddModal}
              className="bg-[#fff] text-black px-3 py-2 rounded-md"
            >
              Add +
            </Button>
          </CardHeader>

          <CardBody className="md:overflow-x-scroll flex gap-3 flex-wrap">
            {[...Array(10)].map((_, index) => (
              <Button
                key={index}
                onClick={() => handleKmButtonClick(index)}
                className={`bg-[#fff] text-black text-lg px-5 py-2 rounded-md border-[1px] border-solid border-gray-500 transition-all hover:scale-105 ${
                  selectedKmIndex === index ? "bg-gray-500" : ""
                }`}
              >
                PK {index}
              </Button>
            ))}
          </CardBody>
        </Card>
      </div>
      <div>
        <Dialog open={addModal} onClose={closeAddModal}>
          <DialogHeader>PD qo'shish</DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="w-full max-w-[24rem]">
                <Input id="addname" label="Ism" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Input id="addlastname" label="Familya" />
              </div>
              <div className="relative flex w-full max-w-[24rem]">
                <Button
                  disabled
                  size="sm"
                  className="!absolute left-1 top-1 rounded"
                >
                  +998
                </Button>
                <Input
                  id="addphone"
                  type="number"
                  className="ps-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={closeAddModal} className="mr-1">
              <span>Orqaga</span>
            </Button>
            <Button variant="gradient" color="gray">
              <span>Qo'shish</span>
            </Button>
          </DialogFooter>
        </Dialog>
        <Dialog open={deleteModal} onClose={closeDeleteModal}>
          <DialogBody>
            Uchiraszmi?
            <button>ha</button>
            <button>yu</button>
          </DialogBody>
        </Dialog>
      </div>
    </div>
  );
}

export default MenuPk;
