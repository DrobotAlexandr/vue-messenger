import axios from "axios";

class BaseApi {
    protected static async request(endpoint: string, data: object, isFormData = false) {

        if (!axios.defaults.baseURL) {
            if (window.location.hostname === 'localhost') {
                axios.defaults.baseURL = 'http://psyholog-gram.loc/chat/api';
            } else {
                axios.defaults.baseURL = 'https://psihologram.ru/chat/api';
            }
        }

        const userId = localStorage.getItem('userId');

        let headers = {};

        if (!isFormData) {

            if (userId) {
                data = {...data, userId};
            }

        } else {

            headers = {
                'Content-Type': 'multipart/form-data'
            };

        }

        try {

            const res = await axios.post(endpoint, data,
                {
                    headers: headers
                }
            );
            return res.data;

        } catch (error) {

            console.error("API request error:", error);
            throw error;

        }

    }
}

export default BaseApi;
