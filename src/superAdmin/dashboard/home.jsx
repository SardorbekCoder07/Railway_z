import React, { useState } from "react";
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

} from "@material-tailwind/react";
import { CheckCircleIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { CircularPagination } from "@/superAdmin/widgets/layout/circlePagination";

export function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const openAddModal = () => {
    setAddModal(true);
  };

  const closeAddModal = () => {
    setAddModal(false);
  };

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {/* Statistics Cards */}
      </div>

      <div className="mb-6 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
            <Typography variant="h6" color="white">
              Dashboard
            </Typography>
            <Button onClick={openAddModal} className="bg-[#fff] text-black px-3 py-2 rounded-md">
              <UserPlusIcon className="h-6 w-6 text-black"/>
            </Button>
          </CardHeader>
          <CardBody className="md:overflow-x-scroll">
            <table className="w-full min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                    <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                      PD
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                    <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                      Location
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                    <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                      Data
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                    <Typography variant="small" className="text-sm font-bold uppercase text-blue-gray-400">
                      Actions
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue-gray-200 py-3 px-5">
                    <div className="flex items-center gap-4">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span>PD-1</span>
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1347 - 1357</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">
                    <Button onClick={handleOpenModal}>Ma'lumotlar</Button>
                    <Dialog open={openModal} onClose={handleCloseModal}>
                      <DialogHeader>Modal Title</DialogHeader>
                      <DialogBody>
                        <p>This is the modal content.</p>
                      </DialogBody>
                      <DialogFooter>
                        <Button onClick={handleCloseModal}>Close Modal</Button>
                      </DialogFooter>
                    </Dialog>
                  </td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">
  <button className="flex items-center justify-center gap-1 bg-red-500 text-white px-3 py-1 rounded-md">
    <TrashIcon className="h-4 w-4" />
    Delete
  </button>
</td>

                </tr>
                {/* Additional rows go here */}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <div className="mt-8 w-full flex justify-center items-center">
          <CircularPagination />
        </div>
      </div>

      {/* Add Modal */}
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
              <Button disabled size="sm" className="!absolute left-1 top-1 rounded">
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
          <Button variant="text" color="red" onClick={closeAddModal}>
            <span>Orqaga</span>
          </Button>
          <Button variant="gradient" color="gray">
            <span>Qo'shish</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Home;
