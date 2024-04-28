import { api } from "@/api/api";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


export function SignIn() {
  const [role, setRole] = useState('/auth/log-in')

  async function logIn() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let password = document.getElementById('password').value;
    await axios.post(api + "auth/login", { phoneNumber, password }).then(async res => {
        await sessionStorage.setItem('jwtTokin', "Bearer " + res.data.body);
        if (res.data.message === "ROLE_SUPER_ADMIN") await setRole('/super-admin/home');
        else if (res.data.message === "ROLE_ADMIN") await setRole('/admin/home');
        toast.success("salom")
        await document.getElementById('link').click()
      })
        .catch((err) => {
            // toast.error("Raqam yoki parol xato!")
            console.log(err);
            alert(err)
        })
}

  return (
    <section className="m-8 flex justify-center gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Kirish</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Telefon raqamingiz hamda parolingizni kiriting.</Typography>
        </div>
        <div className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Telefon raqam*
            </Typography>
            <Input
            id="phoneNumber"
            type="number"
              size="lg"
              placeholder="993332200"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Parol*
            </Typography>
            <Input
            id="password"
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button onClick={() => {
            logIn()
          }} className="mt-6" fullWidth>
            Kirish 
          </Button>
      <Link id="link" to={role} href={role}></Link>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
