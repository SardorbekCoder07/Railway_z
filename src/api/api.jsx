export const api = "http://192.168.0.115/";

// beautification jwt token
export const config = {
    headers: {Authorization: sessionStorage.getItem('jwtTokin')}
};

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem('jwtTokin');


export const byId = (id) => document.getElementById(id).value