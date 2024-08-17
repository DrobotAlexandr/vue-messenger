import BaseApi from "@/api/BaseApi";

class ChatApi extends BaseApi {

    public static async createChat(data: object) {
        return await this.request('/chats/create-chat', data);
    }

    public static async getProblemsCategories() {
        return await this.request('/chats/get-problem-categories', {});
    }

}

export default ChatApi;
