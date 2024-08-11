import BaseApi from "@/api/BaseApi";

class LiveChatApi extends BaseApi {

    public static async getUpdates(data: object) {
        return await this.request('/chats/get-updates', data);
    }

}

export default LiveChatApi;
