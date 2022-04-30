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
    flat: number | null
}

export interface IUserAccountProvider {
    id: string,
    number: number | null,
    status: boolean
}

export interface IUserAccountCredential {
    fullName: string,
    phone: number
}
