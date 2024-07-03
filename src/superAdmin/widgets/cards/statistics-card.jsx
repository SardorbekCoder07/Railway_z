import { api, config, setConfig } from "@/api/api";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function StatisticsCardS() {
  const [adminstatistics, setAdminStatistics] = useState(null)

  useEffect(()=>{
    setConfig()
    superAdminStatistics()
  },[])

  const superAdminStatistics = () => {
    axios.get(`${api}user/statistic`, config)
      .then((res) => {
         setAdminStatistics(res.data.body)
         console.log(res);
      })
      .catch((err) =>  {})
  }

  return (
    <>
      <Card className="border border-blue-gray-100 shadow-sm">
        <CardHeader
          variant="gradient"
          color="gray"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center"
        >
          <UserCircleIcon />
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Kuzatuvchilar soni
          </Typography>
          <Typography variant="h4" color="blue-gray">
            {adminstatistics ? adminstatistics.countAdmin:0}
          </Typography>
        </CardBody>
      </Card>
    
      <Card className="border border-blue-gray-100 shadow-sm">
        <CardHeader
          variant="gradient"
          color="gray"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center"
        >
          <UserCircleIcon />
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Lederlar soni soni
          </Typography>
          <Typography variant="h4" color="blue-gray">
            {adminstatistics ? adminstatistics.leaderCount:0}
          </Typography>
        </CardBody>
      </Card>


      <Card className="border border-blue-gray-100 shadow-sm">
        <CardHeader
          variant="gradient"
          color="gray"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center"
        >
          <UserCircleIcon />
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Yo'l ustlari soni
          </Typography>
          <Typography variant="h4" color="blue-gray">
            {adminstatistics ? adminstatistics.countPd:0}
          </Typography>
        </CardBody>
      </Card>


      <Card className="border border-blue-gray-100 shadow-sm">
        <CardHeader
          variant="gradient"
          color="gray"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center"
        >
          <UserCircleIcon />
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Yo'l brigadalari soni
          </Typography>
          <Typography variant="h4" color="blue-gray">
            {adminstatistics ? adminstatistics.countPdb : 0}
          </Typography>
        </CardBody>
      </Card>
    </>


  );
}

StatisticsCardS.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCardS.propTypes = {
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

StatisticsCardS.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCardS;
