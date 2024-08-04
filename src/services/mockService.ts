import { ForecastModel, DetailedForecastModel } from '../models/Forecast';

const getRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
};

export const generateDetailedForecast = (date = new Date()): DetailedForecastModel => {
    const minTemperature = getRandomNumber(12);
    return {
        date,
        minTemperature,
        maxTemperature: getRandomNumber(10) + minTemperature,
        windSpeed: getRandomNumber(4),
    };
};

export const generateForecast = (date = new Date()): ForecastModel => {
    const minTemperature = getRandomNumber(14);
    return {
        date,
        minTemperature,
        maxTemperature: getRandomNumber(12) + minTemperature,
    };
};

export const generateFutureForecast = (numberOfDays = 6): Array<ForecastModel> => {
    const futureForecast: Array<ForecastModel> = [];
    for (let i = 0; i < numberOfDays; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i + 1)
        futureForecast.push(generateForecast(date));
    }
    return futureForecast;
};
