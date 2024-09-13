import { useEffect, useState } from 'react';
import { CityModel } from '../../models/Location';
import { getForecastByLocation } from '../../services/apiService';
import DetailedForecast from '../forecast/DetailedForecast';
import FutureForecast from '../forecast/FutureForecast';
import { LocationWeatherForecastModel } from '../../models/Weather';

interface Props {
    item: CityModel;
    remove: () => void;
}

const WeatherCityItem = ({ item, remove }: Props) => {
    const [weatherForecast, setWeatherForecast] = useState<LocationWeatherForecastModel>();

    useEffect(() => {
        const getLocationForecast = async () => {
            setWeatherForecast(await getForecastByLocation(item.name));
        }

        getLocationForecast();
    }, [item]);
    
    return (
        <article className='relative flex flex-col drop-shadow-md rounded-md px-4 py-2 bg-white'>
            <p className='text-lg'>{item.name}</p>

            <button
                className='transition absolute top-1 end-1 text-sm w-7 h-7 ml-2 p-1 hover:text-red-600'
                onClick={remove}
            >
                <span className='drop-shadow-sm fa-solid fa-trash' />
            </button>

            {weatherForecast && <DetailedForecast forecast={weatherForecast} />}
            <div className='h-0.5 bg-slate-200 my-3' />
            {weatherForecast && <FutureForecast forecastList={weatherForecast} />}
        </article>
    );
};

export default WeatherCityItem;