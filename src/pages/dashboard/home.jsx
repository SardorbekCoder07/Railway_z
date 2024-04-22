
import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import { statisticsCardsData } from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>

      <div className="mb-6  gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 flex items-center justify-between p-6">
            <Typography variant="h6" color="white">
              Songs Table
            </Typography>
            <button
              className="bg-[#fff] text-black px-3 py-2 rounded-md"
              // onClick={handleOpenModal} // Attach event handler to open modal
            >
              Add +
            </button>
          </CardHeader>
          <CardBody className=" md:overflow-x-scroll">
            <table className="w-full min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                    <Typography
                      variant="small"
                      className="text-sm font-bold uppercase text-blue-gray-400"
                    >
                      PD
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                    <Typography
                      variant="small"
                      className="text-sm font-bold uppercase text-blue-gray-400"
                    >
                      Location
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-200 py-3 px-5 text-left">
                    <Typography
                      variant="small"
                      className="text-sm font-bold uppercase text-blue-gray-400"
                    >
                      Data
                    </Typography>
                  </th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue-gray-200 py-3 px-5">
                    <div className="flex items-center gap-4">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span>The Sliding Mr. Bones (Next Stop, Pottersville)</span>
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">Malcolm Lockyer</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1961</td>
                </tr>
                <tr>
                  <td className="border-b border-blue-gray-200 py-3 px-5">
                    <div className="flex items-center gap-4">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span>Witchy Woman</span>
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">The Eagles</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1972</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1972</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1972</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1972</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1972</td>
                </tr>
                <tr>
                  <td className="border-b border-blue-gray-200 py-3 px-5">
                    <div className="flex items-center gap-4">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span>Shining Star</span>
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">Earth, Wind, and Fire</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1975</td> 
                  <td className="border-b border-blue-gray-200 py-3 px-5">1975</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1975</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1975</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1975</td>
                  <td className="border-b border-blue-gray-200 py-3 px-5">1975</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;