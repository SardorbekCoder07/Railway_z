import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import { ForwardIcon } from "@heroicons/react/24/outline";

export function Works() {
  const [selectedTab, setSelectedTab] = React.useState("html");
  const [htmlInputValue, setHtmlInputValue] = React.useState("");

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

  const data = [
    {
      label: "Bugungi Ishlar",
      value: "html",
      input: (
        <div className="relative w-full min-w-[200px]">
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
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
      button: (
        <Button className="flex gap-2 items-center" onClick={handleNextButtonClick}>
          Next <ForwardIcon className="h-4 w-4 ml-1" />
        </Button>
      ),
    },
    {
      label: "Ertangi Ishlar",
      value: "react",
      input: (
        <div className="relative w-full min-w-[200px]">
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
          >
            Hisobot Kiriting
          </label>
        </div>
      ),
      button: (
        <Button onClick={handleNextButtonClick} className="flex gap-2 items-center">
          Yuborish <ForwardIcon className="h-4 w-4 ml-1" />
        </Button>
      ),
    },
  ];

  return (
    <div className="mt-5 mb-10 flex flex-col gap-10">
      <div className="relative h-10 w-72 min-w-[200px]">
        <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
          <option value="brazil">1374 - km</option>
          <option value="bucharest">1374 - km</option>
          <option value="london">1374 - km</option>
          <option value="washington">1374 - km</option>
        </select>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Select a km
        </label>
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

export default Works;
