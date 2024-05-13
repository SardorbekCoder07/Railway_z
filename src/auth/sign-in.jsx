
import { api } from "@/api/api";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export function SignIn() {
    const [role, setRole] = useState('/auth/log-in');
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [validPhoneNumber, setPhoneNumber] = useState(false);
    const [validPassword, setPassword] = useState(false);
    const [validTextP, setValidTextP] = useState(false);
    const [validTextT, setValidTextT] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        document.getElementById('link').click();
    }, [role]);

    const validateInputs = () => {
        let phoneNumber = document.getElementById('phoneNumber').value;
        let password = document.getElementById('password').value;

        let phoneError = !(/^\998\d{9}$/.test(phoneNumber));
        let passwordError = !(/^[a-zA-Z0-9]{4,}$/.test(password));

        setPhoneNumber(phoneError)
        setValidTextP(phoneError)

        setPassword(passwordError)
        setValidTextT(passwordError)
    };

    function logIn() {

        let phoneNumber = `+${document.getElementById('phoneNumber').value}`;
        let password = document.getElementById('password').value;
        if (!validPhoneNumber && !validPassword) {
            setLoading(true); // Set loading state to true
            axios.post(api + "auth/login", { phoneNumber, password }, '')
                .then(res => {
                    setLoading(false)
                    if (res.data.success === false) toast.error('Telefon raqam yoki parol xato kirgizildi!!!')
                    else {
                        sessionStorage.setItem('jwtTokin', "Bearer " + res.data.body);
                        if (res.data.message === "ROLE_SUPER_ADMIN") {
                            setRole('/super-admin/boshqaruv-paneli');
                            toast.success("Tizimga muvaffaqiyatli kirdingiz✔");
                        } else if (res.data.message === "ROLE_ADMIN") {
                            setRole('/admin/hisobot');
                            toast.success("Tizimga muvaffaqiyatli kirdingiz✔");
                        } else if (res.data.message === "ROLE_LEADER") {
                            setRole('/brigadir/boshqaruv-qismi');
                            toast.success("Tizimga muvaffaqiyatli kirdingiz✔");
                        }
                    }
                })
                .catch(() => {
                    setLoading(false)
                    toast.error('Telefon raqam yoki parolda xatolik mavjud❌');
                    setPhoneNumber(true)
                    setPassword(true)
                })
        } else {
            setLoading(false)
        }
    }

    function checkKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            logIn();
        }
    }

    return (
        <section className="m-8 flex justify-center gap-4">
            <div className="w-full lg:w-3/5 mt-24">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Kirish</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
                        Telefon raqamingiz hamda parolingizni kiriting.
                    </Typography>
                </div>
                <div className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Telefon raqam*
                        </Typography>
                        <div><Input
                            onKeyDown={checkKeyPress}
                            id="phoneNumber"
                            type="number"
                            size="lg"
                            placeholder="993332200"
                            className={`${validPhoneNumber ? "outline outline-2 outline-offset-2 outline-red-600" : ""} !border-t-blue-gray-200 focus:!border-t-gray-900`}
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                            <p className={`${validTextP ? "text-red-500" : ""} text-xs mt-1`}>Raqam <span className=" underline">998</span> dan boshlanishi va davomidan 9 ta raqamdan iborat bo'lishi kerak!</p>
                        </div>
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Parol*
                        </Typography>
                        <div>
                            <div className="relative flex w-full ">
                                <Button
                                    size="sm"
                                    className="!absolute right-1 top-1 rounded z-50"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <EyeSlashIcon className="h-4 w-4 text-white" /> :
                                        <EyeIcon className="h-4 w-4 text-white" />}
                                </Button>
                                <Input
                                    className={`${validPassword ? "outline outline-2 outline-offset-2 outline-red-600" : ""}`}
                                    onKeyDown={checkKeyPress}
                                    type={passwordVisible ? "text" : "password"} // Toggle between text and password type
                                    id="password"
                                    placeholder="*******"
                                />

                            </div>
                            <p className={`${validTextT ? "text-red-500" : ""} text-xs mt-1`}>parol <span className=" underline">4 dan</span> ko'p raqam va xarflardan iborat bo'lishi kerak</p>
                        </div>

                    </div>
                    <Button onClick={() => {
                        validateInputs()
                        logIn()
                    }} className="mt-6" fullWidth disabled={loading}>
                        {loading ? "Yuklanmoqda..." : "Kirish"} {/* Show loading text when loading */}
                    </Button>
                    <Link id="link" to={role}></Link>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
