export const getAPIOrigin = (): string => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return 'https://backend.hackarena.pl';
        case 'test':
            return 'https://backend.hackarena.pl';
        default:
            return 'http://localhost:8080';
    }
}

export const getQualiApiOrigin = (): string => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return 'https://quali.hackarena.pl';
        case 'test':
            return 'https://quali.hackarena.pl';
        default:
            return 'http://localhost:5000';
    }
}

export const getAdminAPIKey = (): string => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return process.env.REACT_APP_ADMIN_API_KEY || '';
        case 'test':
            return process.env.REACT_APP_ADMIN_API_KEY || '';
        default:
            return 'admin';
    }
}

export const getAPIKey = (): string => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return process.env.REACT_APP_API_KEY || 'freeW!sh64';
        case 'test':
            return process.env.REACT_APP_API_KEY || 'freeW!sh64';
        default:
            return 'freeW!sh64';
    }
}