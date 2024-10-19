import { ChangePasswordRequestBody, ForgotPasswordRequestBody, LoginRequestBody, RegisterTeamMemberRequestBody, RegisterTeamRequestBody, ResetPasswordRequestBody } from "../../../Types"
import CommunicationService from "../CommunicationService";

export default class AuthenticationService extends CommunicationService {
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

  static async registerTeamMember(body: RegisterTeamMemberRequestBody): Promise<Response> {
    const response = await fetch(this.API_URL + "/register/member", {
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


  static async login(body: LoginRequestBody): Promise<Response> {
    const response = await fetch(this.API_URL + "/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Hack-Arena-API-Key": this.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response;
  }


  static async logout(): Promise<Response> {
    const response = await fetch(this.API_URL + "/logout", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Hack-Arena-API-Key": this.API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response;
  }

  static async forgotPassword(body: ForgotPasswordRequestBody): Promise<Response> {
    const response = await fetch(this.API_URL + "/password/forgot", {
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

  static async changePassword(body: ChangePasswordRequestBody): Promise<Response> {
    const response = await fetch(this.API_URL + "/password/change", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Hack-Arena-API-Key": this.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response
  }

  static async resetPassword(body: ResetPasswordRequestBody): Promise<Response> {
    const response = await fetch(this.API_URL + "/password/reset",
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Hack-Arena-API-Key": this.API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    return response;
  }
}
