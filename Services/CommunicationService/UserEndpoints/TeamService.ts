import { UpdateTeamRequestBody } from "../../../Types";
import CommunicationService from "../CommunicationService";

export default class TeamService extends CommunicationService {
  static async getTeam(teamName: string): Promise<Response> {
    const response = await fetch(this.API_URL + "/team/" + teamName, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Hack-Arena-API-Key": this.API_KEY,
      },
    });

    return response;
  }

  static async updateTeam(teamName: string, body: UpdateTeamRequestBody): Promise<Response> {
    const response = await fetch(this.API_URL + "/team/" + teamName, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Hack-Arena-API-Key": this.API_KEY,
      },
      body: JSON.stringify(body),
    });

    return response;
  }

  static async deleteTeam(teamName: string): Promise<Response> {
    const response = await fetch(this.API_URL + "/team/" + teamName, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Hack-Arena-API-Key": this.API_KEY,
      },
    });

    return response
  }

  static async uploadSolution(teamName: string, solution: File) {
    const formData = new FormData();
    formData.append("file", solution);

    const response = await fetch(this.API_URL + "/upload/solution/" + teamName, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Hack-Arena-API-Key": this.API_KEY,
      },
      body: formData,
    });

    return response;
  }

  static async downloadMatchFile(teamName: string) {
    const response = await fetch(this.API_URL + "/match/" + teamName, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Hack-Arena-API-Key": this.API_KEY,
      },
    });

    return response;
  }
}
