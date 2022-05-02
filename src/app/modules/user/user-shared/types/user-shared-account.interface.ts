export interface IUserAccount {
    id: string,
    fullName: string,
    phone: number,
    address: IUserAccountAddress,
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
    id?: string,
    fullName: string,
    phone: number
}
