import axios from 'axios';

import { API_KEY } from '../env/keys';
import { LocationWeatherForecastModel } from '../models/Weather';

const axiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
});

export const getForecastByLocation = async (location: string, days = 6): Promise<LocationWeatherForecastModel> => {
    const response = await axiosInstance.get(`/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`);
    return response.data;
};

export default axiosInstance;