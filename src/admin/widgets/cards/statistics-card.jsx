import { api, config, setConfig } from "@/api/api";
import { BookOpenIcon, CalendarDaysIcon, GlobeAsiaAustraliaIcon, PlusIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/24/solid";
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
  const [getAdminStatistic, setgetAdminStatistic] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = "Malaka oshirishga (o'qishga) ketganlar soni";
  const truncatedText = fullText.length > 30 ? fullText.slice(0, 27) + "..." : fullText;


  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    setConfig()
    getAdminStatistics()
  }, [])

  const getAdminStatistics = () => {
    axios.get(`${api}user/statistic/admin`, config)
      .then((res) => {
        setgetAdminStatistic(res.data.body)
      })
      .catch((err) => {
      })
  }
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
          className="absolute grid h-12 w-12 place-items-center "
        >
          <UserGroupIcon color="black" />
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Bugungi jami ishlayotganlar soni
          </Typography>
          <Typography variant="h6" color="blue-gray">
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {getAdminStatistic ? getAdminStatistic.employeeCount : 0}
          </Typography>
        </CardBody>
      </Card>
      <Card // Don't forget to add a unique key when mapping over an array
        className="border border-blue-gray-100 shadow-sm"
      >
        <CardHeader
          variant="gradient"
          color="transparent"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center "
        >
          <CalendarDaysIcon color="skyblue"/>
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Dam oluvchilar soni(otgul)
          </Typography>
          <Typography variant="h6" color="blue-gray">
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {getAdminStatistic ? getAdminStatistic.vacationCount : 0}
          </Typography>
        </CardBody>
      </Card>
      <Card // Don't forget to add a unique key when mapping over an array
        className="border border-blue-gray-100 shadow-sm"
      >
        <CardHeader
          variant="gradient"
          color="transparent"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center  "
        >

          <PlusIcon color="red" />
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Kasallar soni
          </Typography>
          <Typography variant="h6" color="blue-gray">
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {getAdminStatistic ? getAdminStatistic.onTrainingCount : 0}
          </Typography>
        </CardBody>
      </Card>
      <Card // Don't forget to add a unique key when mapping over an array
        className="border border-blue-gray-100 shadow-sm"
      >
        <CardHeader
          variant="gradient"
          color="transparent"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center "
        >
          <UsersIcon />
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Ish haqi saqlanmagan holda (BS)
          </Typography>
          <Typography variant="h6" color="blue-gray">
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {getAdminStatistic ? getAdminStatistic.sickCount : 0}
          </Typography>
        </CardBody>
      </Card>
      <Card // Don't forget to add a unique key when mapping over an array
        className="border border-blue-gray-100 shadow-sm"
      >
        <CardHeader
          variant="gradient"
          color="transparent"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center "
        >
          <GlobeAsiaAustraliaIcon color="green" />

        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
            Xizmat safarifda
          </Typography>
          <Typography variant="h6" color="blue-gray">
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {getAdminStatistic ? getAdminStatistic.restCount : 0}
          </Typography>
        </CardBody>
      </Card>
      <Card // Don't forget to add a unique key when mapping over an array
        className="border border-blue-gray-100 shadow-sm"
      >
        <CardHeader
          variant="gradient"
          color="transparent"
          floated={false}
          shadow={false}
          className="absolute grid h-12 w-12 place-items-center "
        >
          <BookOpenIcon color="brown"/>
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography variant="small" className="font-normal text-blue-gray-600">
          <div onClick={toggleText} style={{ cursor: "pointer", maxWidth: "300px" }}>
      {isExpanded ? fullText : truncatedText}
    </div>
          </Typography>
          <Typography variant="h6" color="blue-gray">
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {getAdminStatistic ? getAdminStatistic.tripCount : 0}
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
