import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Popover,
  PopoverHandler,
  Input,
  PopoverContent,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon, ForwardIcon } from "@heroicons/react/24/outline";
import { DayPicker } from "react-day-picker";

export function TabsWithWork() {
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
      button: (
        <Button
          className={`flex gap-2 items-center ${
            selectedTab === "html" && !htmlInputValue ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextButtonClick}
          disabled={selectedTab === "html" && !htmlInputValue}
        >
          Next <ForwardIcon className="h-4 w-4 ml-1" />
        </Button>
      ),
    },
    {
      label: "Ertangi Ishlar",
      value: "react",
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
      button: (
        <Button
          onClick={handleNextButtonClick}
          className={`flex gap-2 items-center ${
            selectedTab === "react" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedTab === "react"}
        >
          Yuborish <ForwardIcon className="h-4 w-4 ml-1" />
        </Button>
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
