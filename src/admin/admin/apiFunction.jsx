import axios from "axios";
import {api, config} from "@/api/api.jsx";

// get pdb
export const getPdb = (setPdb) => {
    axios.get(`${api}pdb`, config)
        .then(res => {
            if (res.data.success === true) setPdb(res.data.body)
            else setPdb(null)
        })
        .catch(err => console.log(err))
}

// get railway
export const getRailway = (id, setRailway) => {
    axios.get(`${api}railway?pdbId=${id}`, config)
        .then(res => {
            if (res.data.success === true) setRailway(res.data.body)
            else setRailway(null)
        })
        .catch(err => console.log(err))
}

// get pk
export const getPk = (id, setPk) => {
    axios.get(`${api}pk?railwayId=${id}`, config)
        .then(res => {
            if (res.data.success === true) setPk(res.data.body)
            else setPk(null)
        })
        .catch(err => console.log(err))
}

// get pk
export const getDayPlan = (id, setDayPlan) => {
    axios.get(`${api}day/plan?pkId=${id}`, config)
        .then(res => {
            if (res.data.success === true) setDayPlan(res.data.body)
            else setDayPlan(null)
        })
        .catch(err => console.log(err))
}
