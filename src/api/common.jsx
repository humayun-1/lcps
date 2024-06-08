import { BASE_URL } from "data/api";
import { toast } from "react-hot-toast";

export const getToken = () => {
    let token = localStorage.getItem("access_token");
    if (token) {
        return token;
    } else {
        // toast.error("Please login first!");
        // window.location.href = "/login";
    }
}

export const setToken = (token, data) => {
    localStorage.setItem("access_token", "Bearer " + token);
    if (data) {
        localStorage.setItem("data", JSON.stringify(data));
    }
}

export const removeToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("data");
    window.location.href = "/login";
    toast.success("Logged out successfully!");
}

export const createFormDataFields = (formData, values) => {
    Object.entries(values).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((element) => {
                formData.append(key, element);
            });
        } else {
            formData.append(key, value);
        }
    });
}

export const POST = async (url, data, successCallback) => {
    const formData = new FormData();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getToken());
    createFormDataFields(formData, data);

    const response = await fetch(BASE_URL + url, {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow"
    });

    const responseData = await response.json();

    if (!responseData.success) {
        toast.error(JSON.stringify(responseData.response), {
            id: "error"
        });
        console.log('ERROR', responseData);
        throw new Error(JSON.stringify(responseData.response) || 'POST request failed');
    }

    if (successCallback && typeof successCallback === 'function') {
        successCallback();
    }

    return responseData;
};


export const GET = async (url, successCallback, ignoreSuccesCheck) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getToken());

    const response = await fetch(BASE_URL + url, {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    });

    const responseData = await response.json();
    if (!!ignoreSuccesCheck == false && !responseData.success) {
        // toast.error(responseData.response);
        console.log('ERROR', responseData);
        throw new Error(responseData.response || 'GET request failed');
    }

    if (successCallback && typeof successCallback === 'function') {
        successCallback();
    }

    return responseData;
};