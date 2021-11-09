import axios from "axios";
export const createOrUpdateUser = async (authtoken) => {
    return await axios.post(
        `http://localhost:8000/api/create-or-update-user`,
        {},
        {
            headers: {
                authtoken,
            },
        }
    );
};

//we are using the below function to store usser without using the firebae middleware
export const createUser = async (name,email) => {
    return await axios.post(
        `http://localhost:8000/api/create-user`,
        {name,email},
        {
        }
    );
};

export const currentUser = async (authtoken) => {
    return await axios.post(
        `http://localhost:8000/api/current-user`,
        {},
        {
            headers: {
                authtoken,
            },
        }
    );
};