import Button from "components/common/atoms/button";
import { BASE_URL } from "data/api";
import { CSVLink } from "react-csv";
import { toast } from "react-hot-toast";
import Svgs from "svgs";



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
    window.location.href = "/";
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

export const CSVExport = ({ data, filename = 'export.csv' }) => {
    // Function to convert nested objects and arrays to string representation
    const stringifyValue = (value) => {
        if (Array.isArray(value)) {
            // Handle arrays: concatenate names with comma
            return value.map(item => (typeof item === 'object' ? extractName(item) : item)).join(', ');
        } else if (typeof value === 'object' && value !== null) {
            // Handle objects: return name if exists
            return extractName(value);
        } else {
            // Handle primitives and null/undefined
            return value;
        }
    };

    // Function to extract name from an object
    const extractName = (obj) => {
        return obj.name || ''; // Return name if exists, otherwise empty string
    };

    // Convert each object in data to a string, handling nested objects and arrays
    const stringifiedData = data?.map(obj => {
        const stringifiedObj = {};
        Object.keys(obj).forEach(key => {
            stringifiedObj[key] = stringifyValue(obj[key]); // Stringify each value in the object
        });
        return stringifiedObj;
    });

    // Generate headers from the keys of the first object in data
    const headers = data?.length > 0 ?
        Object.keys(data[0]).map(key => ({
            label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter of each key
            key: key
        })) : [];

    return (
        stringifiedData && headers && (
            <CSVLink data={stringifiedData} headers={headers} filename={filename}>
                <Button>
                    <div className="flex items-center gap-2">
                        Export Data
                        <Svgs.Export />
                    </div>
                </Button>
            </CSVLink>
        )
    );
};