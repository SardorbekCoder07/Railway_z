import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Switch,
  Input,
} from "@material-tailwind/react";
import { ForwardIcon } from "@heroicons/react/24/outline";

export function TabsWithWork() {
  const [selectedTab, setSelectedTab] = React.useState("html");
  const [htmlInputValue, setHtmlInputValue] = React.useState("");
  const [htmlInputValue1, setHtmlInputValue1] = React.useState("");

  const handleNextButtonClick = () => {
    if (selectedTab === "html" && !htmlInputValue) {
      // If on "html" tab and input value is not entered, don't switch tabs
      return;
    }
    const currentIndex = data.findIndex((item) => item.value === selectedTab);
    const nextIndex = (currentIndex + 1) % data.length;
    const nextTabValue = data[nextIndex].value;
    setSelectedTab(nextTabValue);
  };

  const handleHtmlInputChange = (e) => {
    setHtmlInputValue(e.target.value);
  };

  const handleHtmlInputChange1 = (e) => {
    setHtmlInputValue1(e.target.value);
  };

  const data = [
    {
      label: "Bugungi Ishlar",
      value: "html",
      input: (
        <div className="relative w-full min-w-[200px]">
          <textarea
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            value={htmlInputValue}
            onChange={handleHtmlInputChange}
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
          >
            Hisobot Kiriting
          </label>
        </div>
      ),
      button:"",
    },
    {
      label: "Ertangi Ishlar",
      value: "react",
      input: (
        <div className="relative w-full min-w-[200px]">
          <textarea
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            value={htmlInputValue1}
            onChange={handleHtmlInputChange1}
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
          >
            Hisobot Kiriting
          </label>
        </div>
      ),
      button:"",
    },
    {
      label: "Ish Qurollari",
      value: "css",
      input: (
        <div className="relative w-full min-w-[200px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nomi
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Qiymati
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Chek
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">250</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <Input type="number" placeholder="Soni" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Switch/>
                </td>
              </tr>
              {/* Additional rows go here */}
            </tbody>
          </table>
        </div>
      ),
      button:(
        <div>
          <Button className="flex items-center ju">Send</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-5 mb-10 flex flex-col gap-10">
      <div>
        <h3>PD-report</h3>
        {/* for calendar */}
      </div>
      <Tabs
        id="custom-animation"
        value={selectedTab}
        onChange={(newValue) => setSelectedTab(newValue)}
      >
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, input, button }) => (
            <TabPanel key={value} value={value} className="flex flex-col gap-2">
              {input}
              {button}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default TabsWithWork;
