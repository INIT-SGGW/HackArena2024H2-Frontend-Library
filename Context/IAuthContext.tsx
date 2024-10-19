import { NavigateFunction } from "react-router-dom";

export abstract class IAuthContext<T> {
    private static _instance: IAuthContext<any>;
    protected _isAuthenticated: boolean | null = null;
    protected _navigate: NavigateFunction;
    abstract login(): void;
    abstract logout(): void;
    abstract useAuth(): T;


    static getInstance<U extends IAuthContext<any>>(): IAuthContext<any> {

        return this._instance;
    }

    protected constructor(navigate: NavigateFunction) {
        if (IAuthContext._instance) {
            throw new Error("Error: Instantiation failed: Use IContext.instance instead of new.");
        }
        this._navigate = navigate;
        IAuthContext._instance = this;
    }
}

export class IContext<T> {
    private static _instance: IContext<any>;
    protected _isAuthenticated: boolean = false;

    protected constructor() { }

    static get Instance(): IContext<any> {
        return this._instance || (this._instance = new this());
    }

    init(): void {
        throw new Error("Method not implemented.");
    }

    login(): void {
        throw new Error("Method not implemented.");
    }

    logout(): void {
        throw new Error("Method not implemented.");
    }

    useAuth(): T {
        throw new Error("Method not implemented.");
    }
}

