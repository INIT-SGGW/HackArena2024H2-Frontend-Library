export type ErrorBodyResponse = {
    error: string;
}

// export type TokenUser = {
//     firstName: string;
//     lastName: string;
//     userId: unknown;
//     role: string;
// };

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