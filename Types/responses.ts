export type ErrorBodyResponse = {
    error: string;
}

export type LoginBodyResponse = {
    email: string;
    teamName: string;
}

export type GetTeamResponseBody = {
    teamName: string;
    teamMembers: {
        email: string;
        firstName: string;
        lastName: string;
        verified: boolean;
    }[]
}

export interface TeamData extends GetTeamResponseBody { };

export type GetTestTaskResponseBody = {
    chances: number;
}

export type GetTestTaskFinishedResponseBody = {
    chances: number;
    completed: boolean;
}

export type SendGuessResponseBody = {
    message: string;
    chances: number;
}

export enum ApprovedStatus {
    Approved = 'approved',
    Rejected = 'denied',
    Pending = 'pending'
}

export interface GetAllTeamsResponseBody {
    teams: {
        teamName: string
        verified: boolean
        approved: ApprovedStatus
        numberOfUsers: number
    }[]
}

export interface TeamsData extends GetAllTeamsResponseBody { };


export interface GetAllEventTeamsResponseBody {
    teams: {
        teamName: string
        confirmationStatus: boolean;
        solutionStatus: boolean;
        approvedStatus: ApprovedStatus;
        createdAt: string;
    }[]
}

export interface EventTeamsData extends GetAllEventTeamsResponseBody { };

export interface getAllUsersResponseBody {
    users: {
        teamName: string;
        email: string;
        firstName: string;
        lastName: string;
        verified: boolean;
    }[]
}

export interface UsersData extends getAllUsersResponseBody { };

export interface GetMatchNameResponseBody {
    isMatchFileSend: boolean;
    MatchFileName: string;
}