import axios from "axios";

class BaseApi {
    protected static async request(endpoint: string, data: object) {

        if (!axios.defaults.baseURL) {
            axios.defaults.baseURL = 'http://psyholog-gram.loc/chat/api';
        }

        const userId = localStorage.getItem('userId');

        if (userId) {
            data = {...data, userId};
        }

        try {
            const res = await axios.post(endpoint, data);
            return res.data;
        } catch (error) {
            console.error("API request error:", error);
            throw error;
        }

    }
}

export default BaseApi;
