import { getAPIOrigin, getQualiApiOrigin } from "../Utils/getOrigin";

export default class CommunicationService {
    static API_URL: string = getAPIOrigin() + "/api/v2";
    static API_KEY: string = process.env.REACT_APP_API_KEY || "";
    static QUALIFICATION_API_URL: string = getQualiApiOrigin() + "/api/v1";
}