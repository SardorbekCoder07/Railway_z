export const api = "http://192.168.176.40/";

// beautification jwt token
export const config = {
    headers: {Authorization: sessionStorage.getItem('jwtTokin')}
};

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem('jwtTokin');


export const byId = (id) => document.getElementById(id).value