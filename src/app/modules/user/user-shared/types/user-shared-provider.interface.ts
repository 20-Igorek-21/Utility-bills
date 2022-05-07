export interface IProvider {
    gasIndicator: string,
    energyIndicator: string,
    tecIndicator: string,
    waterIndicator: string,
}
export interface  IIndicators {
    provider: IProvider,
    value: string
}
