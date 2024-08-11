import BaseApi from "@/api/BaseApi";

class LiveChatApi extends BaseApi {

    public static async getUpdates() {
        return await this.request('/chats/get-updates', {});
    }

}

export default LiveChatApi;
