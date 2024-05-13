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
import { api, byId, config, userGetNe } from "@/api/api";
import toast from "react-hot-toast";
import axios from "axios";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const [editModal, setEditModal] = useState(false)
  const [getMy, setGetMy] = useState(null)


  // ******************* edit valitate inputs **********************
  const [validPhoneNumberEdit, setPhoneNumberEdit] = useState(false);
  const [validPasswordEdit, setPasswordEdit] = useState(false);
  const [validTextPEdit, setValidTextPEdit] = useState(false);
  const [validTextTEdit, setValidTextTEdit] = useState(false);
  const [validRoleEdit, setValidRoleEdit] = useState(false);

  const openEditModal = () => setEditModal(true)
  const closeEditModal = () => {
    setEditModal(false)
  }

  useEffect(() => {
    userGetNe(setGetMy)
  }, [])

  // *******************EDIT USER **********************
  const editUser = () => {
    function todayPlanInfo(obj) {
      for (let key in obj) {
        if (obj[key] === undefined || obj[key] === null || obj[key] === false || obj[key] === "NaN" || obj[key] === '') {
          return false;
          // Agar inputlardan birortasi bulsa xam (undefined, null, false, 0, NaN, ''), false qaytariladi
        }
      }
      return true; // xammasi 100% tuldirilsa true qaytaradi
    }

    const editData = {
      firstName: byId("editname"),
      lastName: byId("editlastname"),
      password: byId("editpassword"),
      phoneNumber: `+998${byId("editphone")}`

    }
    let isTrue = todayPlanInfo(editData)

    if (isTrue) {
      if (!validPasswordEdit && !validTextPEdit) {
        axios.put(`${api}user/update?id=${getMy ? getMy.id : 0}`, editData, config)
          .then(() => {
            closeEditModal()
            userGetNe(setGetMy)
            toast.success("Bu hodim muvoffaqqiyatli tahrirlandi!👌")
          })
          .catch((err) => {
            closeEditModal()
            toast.error("Bu hodimni tahrirlashda xatolik yuz berdi")

          })
      } else {
        toast.error("Telefon raqam yoki parolda xatolik mavjud❌")
      }
    } else {
      toast.error(" Malunot toliq kiritilmagan !")
      setPhoneNumberEdit(false)
      setPasswordEdit(false)
    }
  }

  // ******************* HANDLE CHANGE **********************

  const editvalidateInputs = () => {
    let phoneNumber = document.getElementById('editphone').value;
    let password = document.getElementById('editpassword').value;

    if (editModal) {
      let phoneError = !(/^\d{9}$/.test(phoneNumber));
      let passwordError = !(/^[a-zA-Z0-9]{4,}$/.test(password));

      setPhoneNumberEdit(phoneError)
      setValidTextPEdit(phoneError)

      setPasswordEdit(passwordError)
      setValidTextTEdit(passwordError)

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
          <div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
              onClick={() => setOpenSidenav(dispatch, !openSidenav)}
            >
              <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
            </IconButton>
          </div>
          <div>
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
          </div>
        </div>
        <Dialog open={editModal} handler={closeEditModal}>
          <DialogHeader>Tahrirlash</DialogHeader>
          <DialogBody>
            <div className="flex justify-center flex-col items-center gap-5">
              <div className="w-full max-w-[24rem]">
                <Input
                  required
                  defaultValue={getMy ? getMy.firstName : "Ma'lumot yo'q"}
                  id="editname"
                  label="Ism" />
              </div>
              <div className="w-full max-w-[24rem]">
                <Input
                  required
                  defaultValue={getMy ? getMy.lastName : "Ma'lumot yo'q"}
                  id="editlastname"
                  label="Familya" />
              </div>
              <div className="relative flex flex-col w-full max-w-[24rem]">
                <div className="relative w-full ">
                  <Button
                    disabled
                    size="sm"
                    className="!absolute left-1 top-1 rounded z-50"
                  >
                    +998
                  </Button>
                  <Input
                    defaultValue={getMy ? getMy.phoneNumber.substr(4) : ""}
                    id="editphone"
                    type="number"
                    className={`${validPhoneNumberEdit ? "outline outline-2 outline-offset-2 outline-red-600" : ""} ps-20`}
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                </div>
                <p className={`${validTextPEdit ? "text-red-500" : ""} text-xs w-full max-w-[24rem] mt-1`}><span className=" underline">9 ta</span>  raqamdan iborat bo'lishi kerak!</p>
              </div>

              <div className="w-full max-w-[24rem]">
                <Input
                  className={`${validPasswordEdit ? "outline outline-2 outline-offset-2 outline-red-600" : ""} `}
                  type="pasword"
                  id="editpassword"
                  label="Parol" />
                <p className={`${validTextPEdit ? "text-red-500" : ""} text-xs w-full max-w-[24rem] mt-1`}><span className=" underline">4 ta</span>  raqamdan kam bo'lmasligi kerak!</p>
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
            <span>
              <Button onClick={() => {
                editUser()
                editvalidateInputs()
              }} variant="gradient" color="gray">
                <span>Tahrirlash</span>
              </Button>
            </span>
          </DialogFooter>
        </Dialog>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
