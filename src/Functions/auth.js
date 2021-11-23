import axios from "axios";
export const createOrUpdateUser = async (authtoken) => {
    return await axios.post(
        `https://drogoncoin.herokuapp.com/api/create-or-update-user`,
        {},
        {
            headers: {
                authtoken,
            },
        }
    );
};

//we are using the below function to store usser without using the firebae middleware
export const createUser = async (name, email) => {
    return await axios.post(
        `https://drogoncoin.herokuapp.com/api/create-user`,
        { name, email },
        {
        }
    );
};

export const currentUser = async (authtoken) => {
    return await axios.post(
        `https://drogoncoin.herokuapp.com/api/current-user`,
        {},
        {
            headers: {
                authtoken,
            },
        }
    );
};

export const createContact = async (authtoken,name,email,message) => {
    return await axios.post
        (
            `https://drogoncoin.herokuapp.com/api/create-query`,
            {name, email, message},
            {
                headers: {
                    authtoken,
                },
            }
        );
}