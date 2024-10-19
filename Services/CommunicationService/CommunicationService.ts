import { getAdminAPIKey, getAPIKey, getAPIOrigin, getQualiApiOrigin } from "../../Utils";

export default class CommunicationService {
    static API_URL: string = getAPIOrigin() + "/api/v2";
    static QUALIFICATION_API_URL: string = getQualiApiOrigin() + "/api/v1";
    static API_KEY: string = getAPIKey();
    static ADMIN_API_KEY: string = getAdminAPIKey();
}