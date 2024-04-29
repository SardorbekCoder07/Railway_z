import { api, config, setConfig } from "@/api/api";
import { UserGroupIcon, UserIcon, UsersIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function StatisticsCard() {
  // const [getAdminStatistic, setgetAdminStatistic] = useState(null)
  // useEffect(() => {
  //   setConfig()
  //   getAdminStatistics()
  // }, [])

  // const getAdminStatistics = () => {
  //   axios.get(`${api}user/statistic/admin`, config)
  //     .then((res) => {
  //       console.log(res.data.body)
  //       setgetAdminStatistic(res.data.body)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
  // const statisticsCardsData = [
  //   {
  //     title: "Jami ishchilar soni",
  //     color: "transparent",
  //     icon: UserGroupIcon,
  //     value: getAdminStatistic.employeeCount,
  //   },
  //   {
  //     title: "Hodimlar Soni",
  //     color: "transparent",
  //     icon: UserGroupIcon,
  //     value: getAdminStatistic.employeeCount,
  //   },
  //   {
  //     title: "Ta'tildagilar soni",
  //     color: "transparent",
  //     icon: UserIcon,
  //     value: getAdminStatistic.employeeCount,
  //   },
  //   {
  //     title: "Kasallar soni",
  //     color: "transparent",
  //     icon: UserGroupIcon,
  //     value: getAdminStatistic.employeeCount,
  //   },
  //   {
  //     title: "Dam olayotganlar soni",
  //     color: "transparent",
  //     icon: UserGroupIcon,
  //     value: getAdminStatistic.employeeCount,
  //   },
  //   {
  //     title: "Sayohatdagilar soni",
  //     color: "transparent",
  //     icon: UserGroupIcon,
  //     value: getAdminStatistic.employeeCount,
  //   }
  // ]
  return (
    <>
      <Card // Don't forget to add a unique key when mapping over an array
        className="border border-blue-gray-100 shadow-sm"
      >
        <CardHeader
          variant="gradient"
          color="transparent"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center"
        />
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Jami ishchilar soni
          </Typography>
          <Typography variant="h4" color="blue-gray">
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {/* {console.log(getAdminStatistic.employeeCount)} */}
            15
          </Typography>
        </CardBody>
      </Card>
    </>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
