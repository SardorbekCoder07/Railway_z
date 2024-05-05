export const api = "http://139.59.79.149:8080/";

// beautification jwt token
export const config = {
    headers: {Authorization: sessionStorage.getItem('jwtTokin')}
};

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem('jwtTokin');


export const byId = (id) => document.getElementById(id).value