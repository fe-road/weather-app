export interface ForecastModel {
    date: Date;
    minTemperature: number;
    maxTemperature: number;
}

export interface DetailedForecastModel extends ForecastModel {
    windSpeed: number;
    // TODO add more properties
}

