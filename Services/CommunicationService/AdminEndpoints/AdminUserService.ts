import CommunicationService from "../CommunicationService";

export default class AdminUserService extends CommunicationService {
    static async getAllUsers() {
        const response = await fetch(this.API_URL + "/admin/users", {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
            },
        });

        return response;
    }
}