import ApiManager from "./ApiManager";
export const userapi = async data => {
    try {
        const result = await ApiManager("/user/log-in/", {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            data: data,

        });
        return result;
    }
    catch (err) {
        return err.response.data
    }
}

export const userapi2 = async data => {
    try {
        const result = await ApiManager("/user/log-in/mpin/", {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            data: data,

        });
        return result;
    }
    catch (err) {
        return err;
    }
}