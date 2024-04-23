import {
 Card,
 Input,
 Checkbox,
 Button,
 Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function SignIn() {
 return (
   <section className="m-8 flex justify-center gap-4">
     <div className="w-full lg:w-3/5 mt-24">
       <div className="text-center">
         <Typography variant="h2" className="font-bold mb-4">Login</Typography>
         <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to login.</Typography>
       </div>
       <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
         <div className="mb-1 flex flex-col gap-6">
           <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
             Your email
           </Typography>
           <Input
             size="lg"
             placeholder="name@mail.com"
             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
             labelProps={{
               className: "before:content-none after:content-none",
             }}
           />
           <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
             Password
           </Typography>
           <Input
             type="password"
             size="lg"
             placeholder="********"
             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
             labelProps={{
               className: "before:content-none after:content-none",
             }}
           />
         </div>
         <Button className="mt-6" fullWidth>
           Login
         </Button>
       </form>
     </div>
   </section>
 );
}

export default SignIn;
