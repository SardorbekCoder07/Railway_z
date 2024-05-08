export const api = "http://164.92.140.146:8080/api/";

// beautification jwt token
export const config = {
    headers: {Authorization: sessionStorage.getItem('jwtTokin')}
};

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem('jwtTokin');


export const byId = (id) => document.getElementById(id).value