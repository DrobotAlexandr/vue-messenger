import BaseApi from "@/api/BaseApi";

class UserApi extends BaseApi {

    public static async getUser(id: string) {
        return await this.request('/users/get-user', {id: id});
    }

}

export default UserApi;
