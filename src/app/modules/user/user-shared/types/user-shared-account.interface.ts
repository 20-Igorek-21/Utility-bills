export interface IUserAccount {
    id: string,
    credentials: IUserAccountCredential,
    addresses: IUserAccountAddress,
    providers: [IUserAccountProvider]
}

export interface IUserAccountAddress {
    city: string,
    street: string,
    house: string,
    apartment?: string
}

export interface IUserAccountProvider {
    name: string,
    code: string | number,
    status: boolean
}

export interface IUserAccountCredential {
    fullName: string,
    phone: string | number
}
