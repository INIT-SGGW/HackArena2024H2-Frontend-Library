import { GetTestTaskResponseBody, SendGuessRequestBody } from "../Types";
import CommunicationService from "./CommunicationService";

export default class QualificationService extends CommunicationService {
    static async getTestTask(teamName: string): Promise<Response> {
        const response = await fetch(this.QUALIFICATION_API_URL + `/qualification/task/content/${teamName}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })

        return response;
    }

    static async downloadTaskFile(teamName: string): Promise<Response> {
        const response = await fetch(this.QUALIFICATION_API_URL + `/qualification/task/file/${teamName}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })

        return response;
    }

    static async sendGuess(body: SendGuessRequestBody): Promise<Response> {
        const response = await fetch(this.QUALIFICATION_API_URL + "/qualification/guess", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })

        return response;
    }
}