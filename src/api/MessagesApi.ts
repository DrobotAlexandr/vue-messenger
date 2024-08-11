import BaseApi from "@/api/BaseApi";

class MessagesApi extends BaseApi {

    public static async sendMessage(data: object) {
        return await this.request('/chats/send-message', data);
    }

}

export default MessagesApi;
