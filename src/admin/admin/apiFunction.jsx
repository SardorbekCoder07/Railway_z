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

export const getRailway = (id, setRailway) => {
    axios.get(`${api}railway?pdbId=${id}`, config)
        .then(res => {
            if (res.data.success === true) setRailway(res.data.body)
            else setRailway(null)
        })
        .catch(err => console.log(err))
}
