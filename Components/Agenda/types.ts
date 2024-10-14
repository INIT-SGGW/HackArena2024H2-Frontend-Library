export interface ComponentText {
    title: string;
    description: string;
}

export interface AgendaData {
    days: {
        title: string;
        events: {
            time: string;
            text: string | string[];
        }[]
    }[]
}