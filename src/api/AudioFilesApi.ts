import BaseApi from "@/api/BaseApi";

class AudioFilesApi extends BaseApi {

    public static async upload(data: object) {
        return await this.request('/audio-files/upload', data, true);
    }

}

export default AudioFilesApi;
