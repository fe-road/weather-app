import axios from 'axios';

import { API_KEY } from '../env/keys';
import { LocationWeatherForecastModel } from '../models/Weather';

const axiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
});

export const getForecastByLocation = async (location: string, days = 6): Promise<LocationWeatherForecastModel | undefined> => {
    try {
        const response = await axiosInstance.get(`/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`);
        if (response.status === 200) {
            return response.data;
        }
        console.log(`Unexpected error! Status code: ${response.status}`);
    } catch (error) {
        console.error(error);
    }
    return;
};

export default axiosInstance;