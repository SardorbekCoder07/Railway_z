import axios from "axios";

export const api = "https://pch14.uz/api/";

// beautification jwt token
export const config = {
    headers: {
        Authorization: sessionStorage.getItem('jwtTokin'),
        'X-Hidden-Request': 'true' // Bu yerda ko'rsatilgan
    }
};

export const setConfig = () => {
    config.headers.Authorization = sessionStorage.getItem('jwtTokin');
}

export const byId = (id) => document.getElementById(id).value;

const axiosInstance = axios.create({
    baseURL: api,
    headers: config.headers // Konfiguratsiya headerslarini bu yerga qo'shishingiz mumkin
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const hideConsoleErrors = (fn) => {
    const originalConsoleError = console.error;
    console.error = () => {};
    return fn().finally(() => {
        console.error = originalConsoleError; // Konsol funksiyasini tiklash
    });
}

export const userGetNe = (setgetMy) => {
    hideConsoleErrors(() => 
        axiosInstance.get('user/getMe')
            .then((res) => {
                if (res.data.success) setgetMy(res.data.body);
                else setgetMy(null);
            })
            .catch(() => {
                setgetMy(null);
            })
    );
}

export const getPD = (setPD) => {
    hideConsoleErrors(() => 
        axiosInstance.get('pd/all')
            .then((res) => {
                if (res.data.success && res.data.body.length !== 0) setPD(res.data.body);
                else setPD(null);
            })
            .catch(() => {
                setPD(null);
            })
    );
}
