import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { userGetNe } from "@/api/api";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const [editModal, setEditModal] = useState(false)
  const [getMy, setGetMy] = useState(null)

  const openEditModal = () => setEditModal(true)
  const closeEditModal = () => {
    setEditModal(false)
  }

  useEffect(() => {
    userGetNe(setGetMy)
  }, [])

  // ******************* HANDLE CHANGE **********************

  const validateInputs = () => {
    let phoneNumber = document.getElementById('addphone').value;
    let password = document.getElementById('addpassword').value;

    if (addModal) {
      let phoneError = !(/^\d{9}$/.test(phoneNumber));
      let passwordError = !(/^[a-zA-Z0-9]{4,}$/.test(password));

      setPhoneNumber(phoneError)
      setValidTextP(phoneError)

      setPassword(passwordError)
      setValidTextT(passwordError)

    }
  };
  return (
    <Navbar
      color={"white"}
      className={`rounded-xl transition-all ${"sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
        }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${fixedNavbar ? "mt-1" : ""
              }`}
          >
            <Link to={`/${layout}/boshqaruv-paneli`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>
        <div className="flex items-center justify-between">

          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          <Menu>
            <MenuHandler>
              <div className="flex items-center justify-center gap-2">

                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-1 font-normal"
                >
                  <strong>{getMy ? getMy.firstName : ""}</strong>
                </Typography>
                <Avatar
                  className="cursor-pointer"
                  src="https://cdn-icons-png.freepik.com/512/6596/6596121.png"
                  alt="item-1"
                  size="md"
                  variant="circular"
                />
              </div>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem onClick={openEditModal} className="flex items-center justify-center">
                <FaEdit className={'text-[1.2rem]'} />
              </MenuItem>
              <MenuItem className="flex items-center gap-3">

                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>Ism, familiya</strong>
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    {getMy ? getMy.firstName : ""} {getMy ? getMy.lastName : ""}
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>Telefon raqam </strong>
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    {getMy ? getMy.phoneNumber : ""}
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <div>

            <Dialog open={editModal} handler={closeEditModal}>
              <DialogHeader>Tahrirlash</DialogHeader>
              <DialogBody>
                <div className="flex justify-center flex-col items-center gap-7">
                  <div className="w-full max-w-[24rem]">
                    <Input
                      id="editName" label="Ism" />
                  </div>
                  <div className="w-full max-w-[24rem]">
                    <Input
                      id="editPhone"
                      label="Telefon raqam" />
                  </div>
                  <div className="w-full max-w-[24rem]">
                    <Input
                      id="editPassword"
                      label="Parol" />
                  </div>
                </div>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={closeEditModal}
                  className="mr-1"
                >
                  <span>Orqaga</span>
                </Button>
                <span >

                  <Button variant="gradient" color="gray">
                    <span>Tahrirlash</span>
                  </Button>
                </span>
              </DialogFooter>
            </Dialog>
          </div>

        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
