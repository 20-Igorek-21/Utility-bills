export interface IUserAccount {
    account: IUserAccountData,
    address: IUserAccountAddress,
    providers?: IUserAccountProviders[]
}

export interface IUserAccountAddress {
    city: string,
    street: string,
    house: string,
    flat: number | null
}

export interface IUserAccountProviders {
    gasNumber: number | null,
    gasId: string,
    gasStatus: boolean,
    oblenergoNumber: number | null,
    oblenergoId: string,
    oblenergoStatus: boolean,
    khimvoloknoNumber:number | null,
    khimvoloknoId: string,
    khimvoloknoStatus: boolean,
    khimvoloknoCounterInstalled: string,
    vodokanalNumber:number | null,
    vodokanalId: string,
    vodokanalStatus: boolean
}

export interface IUserAccountData {
    id: string,
    fullName: string,
    phone: number
    address: IUserAccountAddress,
}
