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

    public static async removeChat(data: object) {
        return await this.request('/chats/remove-chat', data);
    }

    public static async readMessages(data: object) {
        return await this.request('/chats/read-messages', data);
    }

    public static async reChange(data: object) {
        return await this.request('/chats/re-change-psychologist', data);
    }

    public static async sendComplaint(data: object) {
        return await this.request('/chats/send-complaint', data);
    }



}

export default ChatApi;
