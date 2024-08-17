import BaseApi from "@/api/BaseApi";

class ChatApi extends BaseApi {

    public static async createChat(data: object) {
        return await this.request('/chats/create-chat', data);
    }

    public static async getProblemsCategories() {
        return await this.request('/chats/get-problem-categories', {});
    }

    public static async getNewChatVerifyData() {
        return await this.request('/chats/get-new-chat-verify-data', {});
    }

    public static async setChatTyping(data: object) {
        return await this.request('/chats/set-chat-typing', data);
    }

}

export default ChatApi;
