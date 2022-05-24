export interface IUserAuth {
    email: string;
    password: string;
    id?: string;
    message?: string;
    success?: boolean;
}

export interface ILoginResponse {
    token: string,
    message: string
}
