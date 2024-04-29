import React, { useEffect, useState } from "react";
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
import { api, byId, config, setConfig } from "@/api/api";
import axios from "axios";

export function TabsWithWork() {
  const [selectedTab, setSelectedTab] = useState("html");
  const [products, setProducts] = useState([])
  const [tool, settool] = useState(null)

  // -------------Useeffect------
  useEffect(() => {
    setConfig()
    gettool();
  }, [])


  // --------Switch button id ----------------
  function addProductIds(checked, item) {
    console.log(products);
    if (checked) setProducts([...products, item]);
    else setProducts(products.filter((product) => product.productId !== item.productId))
  }
  // Today date

  const today = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const todayDate = today.toLocaleDateString('uz-UZ', options);

  //----------Today plan api-----------

  const todayPlanAdd = () => {
    const todayPLanInfo = {
      todayPlan: byId("todayPlanID"),
      tomorrowPlan: byId("tomorrowPlan"),
      date: todayDate,
      employeeCount: byId("employeeCount"),
      vacationCount: byId("vacationCount"),
      sickCount: byId("sickCount"),
      restCount: byId("restCount"),
      tripCount: byId("tripCount"),
      onTrainingCount: byId("onTrainingCount"),
      protectionStackST: byId("protectionStackST"),
      protectionStackPR: byId("protectionStackPR"),
      relayConnectorsST: byId("relayConnectorsST"),
      relayConnectorsPR: byId("relayConnectorsPR"),
      reqDayTools: [
        {}
      ]
    }
  }

  // ---------------- get Work tool---------------
  const gettool = () => {
    axios.get(`${api}work-tool/work-tool`, config)
      .then((res) => {
        settool(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err))
  }


  const data = [
    {
      label: "Bugungi Ishlar",
      value: "html",
      input: (
        <div className="relative w-full min-w-[200px]">
          <textarea
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            id="todayPlanID"
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
          >
            Hisobot Kiriting
          </label>
        </div>
      ),
      button: "",
    },
    {
      label: "Ertangi Ishlar",
      value: "react",
      input: (
        <div className="relative w-full min-w-[200px]">
          <textarea
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            id="tomorrowPlan"
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
          >
            Hisobot Kiriting
          </label>
        </div>
      ),
      button: "",
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
              {
                tool && tool.map((item, i) =>
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.name}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <Input type="number" placeholder="Soni" />
                      </div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        onChange={(e) => {
                          addProductIds(e.target.checked, item)
                        }}
                        type="checkbox"
                        className="w-5 h-5"
                      />
                    </td> */}
                  </tr>
                )
              }

              {/* Additional rows go here */}
            </tbody>
          </table>
        </div>
      ),
      button: (
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
      <div className="text-sm text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input required type="number" id="employeeCount" label="Ishchilar soni" />
        <Input required type="number" id="vacationCount" label="Bemor xodimlar soni" />
        <Input required type="number" id="sickCount" label="Dam olishdagilar soni" />
        <Input required type="number" id="restCount" label="Kamandirofkadagilar soni" />
        <Input required type="number" id="tripCount" label="Malaka oshirishga ketganlar" />
        <Input required type="number" id="onTrainingCount" label="Odkul" />
        <Input type="number" id="protectionStackST" label="Rels ulagichlari ST." />
        <Input type="number" id="protectionStackPR" label="Rels ulagichlari PR." />
        <Input type="number" id="relayConnectorsST" label="Himoya stiklari ishchilari soni ST." />
        <Input type="number" id="relayConnectorsPR" label="Hiimoya stiklari ishchilari soni PR." />

      </div>
      <Tabs
        id="custom-animation"
        value={selectedTab}
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
