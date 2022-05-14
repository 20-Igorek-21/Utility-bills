export interface IProvider {
    gasIndicator: string,
    energyIndicator: string,
    tecIndicator: string,
    waterIndicatorHot: string,
    waterIndicatorCold: string,
}
export interface  IIndicators {
    provider: IProvider,
    value: string
}

export interface IUserProviders {
    provider: IUserProvider,
}
export interface IUserProvider {
    fullName: string,
    id: string,
    indicators: Array<IUserIndicator>;
}

export interface IUserIndicator {
    name: string,
}
