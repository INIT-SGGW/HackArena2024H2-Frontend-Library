export type RegisterTeamRequestBody = {
    teamName: string;
    teamMembersEmails: string[];
};

export type UpdateTeamRequestBody = {
    teamName: string;
};

export enum Occupation {
    STUDENT = "student",
    UNDERGRADUATE = "undergraduate",
    POSTGRADUATE = "postgraduate",
    OTHER = "other",
}

export function isValidOccupation(value: string): value is Occupation {
    return Object.values(Occupation).includes(value as Occupation);
}

export enum DietPreference {
    VEGETARIAN = "vegetarian",
    VEGAN = "vegan",
    NONE = "none",
}

export function isValidDietPreference(value: string): value is DietPreference {
    return Object.values(DietPreference).includes(value as DietPreference);
}

export type RegisterTeamMemberRequestBody = {
    verificationToken: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    occupation: Occupation;
    dietPreference: DietPreference;
    agreement: boolean;
    school?: string;
};

export type LoginRequestBody = {
    email: string;
    password: string;
};

export type TokenUser = {
    firstName: string;
    lastName: string;
    userId: unknown;
    role: string;
};

export type ForgotPasswordRequestBody = {
    email: string;
}

export type ChangePasswordRequestBody = {
    newPassword: string;
    oldPassword: string;
}

export type ResetPasswordRequestBody = {
    email: string;
    password: string;
    token: string;
}

export type GetTeamRequestBody = {
    teamName: string;
}

export type SendGuessRequestBody = {
    teamName: string;
    guess: string;
}

export interface AdminLoginRequestBody {
    email: string;
    password: string;
}

export interface AdminRegisterRequestBody {
    email: string;
    password: string;
    name: string;
    userName: string;
}

export enum ApprovedStatusRequest {
    Approved = 'approved',
    Rejected = 'denied',
}

export interface AdminApproveTeamRequestBody {
    status: ApprovedStatusRequest;
}