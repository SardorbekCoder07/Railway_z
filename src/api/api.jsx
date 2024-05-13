import axios from "axios";

export const api = "https://pch14.uz/api/";

// beautification jwt token
export const config = {
    headers: {Authorization: sessionStorage.getItem('jwtTokin')}
};

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem('jwtTokin');


export const byId = (id) => document.getElementById(id).value


export const userGetNe = (setgetMy) => {
    axios.get(`${api}user/getMe`, config)
    .then((res) => {
        if (res.data.success) setgetMy(res.data.body)
        else setgetMy(null)
    })
    .catch((err) => {
        setgetMy(null)
    })
}