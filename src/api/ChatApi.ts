import BaseApi from "@/api/BaseApi";

class ChatApi extends BaseApi {

    public static async createChat(data: object) {
        return await this.request('/chats/create-chat', data);
    }

}

export default ChatApi;
