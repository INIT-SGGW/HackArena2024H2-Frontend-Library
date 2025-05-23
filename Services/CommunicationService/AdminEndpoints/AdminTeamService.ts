import { AdminApproveTeamRequestBody, ApprovedStatusRequest, RegisterTeamRequestBody } from "../../../Types";
import CommunicationService from "../CommunicationService";

export default class AdminTeamService extends CommunicationService {
    static async registerTeam(body: RegisterTeamRequestBody): Promise<Response> {
        const response = await fetch(this.API_URL + "/register/team", {
            method: "POST",
            mode: "cors",
            headers: {
                "Hack-Arena-API-Key": this.API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return response;
    }

    static async getTeam(teamName: string) {
        const response = await fetch(this.API_URL + "admin/team/" + teamName, {
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

    static async getAllTeams() {
        const response = await fetch(this.API_URL + "/admin/teams", {
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

    static async approveTeam(teamName: string) {
        const body: AdminApproveTeamRequestBody = {
            status: ApprovedStatusRequest.Approved,
        };

        const response = await fetch(this.API_URL + "/admin/team/approve/" + teamName, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
            },
            body: JSON.stringify(body),
        });

        return response;
    }

    static async rejectTeam(teamName: string) {
        const body: AdminApproveTeamRequestBody = {
            status: ApprovedStatusRequest.Rejected,
        };

        const response = await fetch(this.API_URL + "/admin/team/approve/" + teamName, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
            },
            body: JSON.stringify(body),
        });

        return response;
    }

    static async getEventTeams() {
        const response = await fetch(this.API_URL + "/admin/event/teams", {
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

    static async downloadSolution(teamName: string) {
        const response = await fetch(this.API_URL + "/admin/solution/" + teamName, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
            }
        })

        return response;
    }

    static async confirmTeam(teamName: string) {
        const response = await fetch(this.API_URL + "/admin/team/confirmation/" + teamName, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
            }
        })

        return response;
    }

    static async deleteTeam(teamName: string): Promise<Response> {
        const response = await fetch(this.API_URL + "/admin/team/" + teamName, {
            method: "DELETE",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
            },
        });

        return response
    }

    static async uploadMatchFile(teamName: string, file: File) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(this.API_URL + "/admin/upload/match/" + teamName, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
            },
            body: formData
        })

        return response;
    }

    static async downloadAllSolutions() {
        const response = await fetch(this.API_URL + "/admin/solutions", {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Hack-Arena-API-Key": this.API_KEY,
                "Hack-Arena-Admin-API-Key": this.ADMIN_API_KEY,
            }
        })

        return response;
    }
}
