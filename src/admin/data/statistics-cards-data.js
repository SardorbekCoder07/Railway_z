import { api, config } from "@/api/api";
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect } from "react";
const AdminStastistic = () => {
  useEffect(()=>{
    axios.get(`${api}user/statistic/admin`, config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log("Apida xato bor yoki ma'lumot yolg'on"))
  },)
}

export const statisticsCardsData = [
  {
    color: "",
    icon: UserGroupIcon,
    title: "Hodimlar Soni",
    value: "53",

  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "PD soni",
    value: "2,300",
  },
  {
    color: "gray",
    icon: BuildingOffice2Icon,
    title: "Bemor hodimlar",
    value: "23",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Odkul",
    value: "12",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Komandirovkada",
    value: "12",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Odkul",
    value: "12",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
