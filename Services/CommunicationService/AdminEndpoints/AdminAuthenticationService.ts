import { AdminLoginRequestBody, AdminRegisterRequestBody } from "../../../Types"
import CommunicationService from "../CommunicationService";

export default class AuthenticationService extends CommunicationService {
    static async register(body: AdminRegisterRequestBody) {
        const response = await fetch(this.API_URL + "/admin/register", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return response;
    }

    static async login(body: AdminLoginRequestBody) {
        const response = await fetch(this.API_URL + "/admin/login", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return response;
    }

    static async logout() {
        const response = await fetch(this.API_URL + "/admin/logout", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
                "Content-Type": "application/json",
            },
        });
        return response;
    }
}
