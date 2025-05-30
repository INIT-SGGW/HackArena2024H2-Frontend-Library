export interface ComponentText {
    title: string
    description: string
    titles: {
        sponsors: string
        partners: string
        mediaPatronage: string,
        patronage: string
    }
}

export type Sponsor = {
    name: string;
    logo: string;
    url?: string;
    height?: number;
}

export type SponsorData = {
    sponsors?: Sponsor[];
    partners?: Sponsor[];
    mediaPatronage?: Sponsor[];
    patronage?: Sponsor[];
}

export enum Event {
    HackArena1 = "hackarena1_0",
    HackArena2 = "hackarena2_0",
}