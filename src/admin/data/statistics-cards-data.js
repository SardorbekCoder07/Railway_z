import {
  UserGroupIcon,
  BuildingOffice2Icon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
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
