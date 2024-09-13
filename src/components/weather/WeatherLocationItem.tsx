import { useEffect, useState } from 'react';

import { LocationModel } from '../../models/Location';
import { LocationWeatherForecastModel } from '../../models/Weather';
import { getForecastByLocation } from '../../services/apiService';

import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

interface Props {
    item: LocationModel;
    remove: () => void;
}

const WeatherLocationItem = ({ item, remove }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [weatherForecast, setWeatherForecast] = useState<LocationWeatherForecastModel>();

    useEffect(() => {
        const getLocationForecast = async () => {
            if (!hasError && !weatherForecast) {
                const newForecast = await getForecastByLocation(item.name);
                if (newForecast) {
                    setWeatherForecast(newForecast);
                } else {
                    setHasError(true);
                }
                setIsLoading(false);
            }
        }
        getLocationForecast();
    }, [item, hasError, weatherForecast]);
    
    return (
        <article className='relative flex flex-col drop-shadow-md rounded-md px-4 py-2 bg-white'>
            <p className='text-lg'>{item.name}</p>

            {isLoading ? (
                <p className='text-sm'>Loading ...</p>
            ) : (
                <>
                    <button
                        className='transition absolute top-1 end-1 text-sm w-7 h-7 ml-2 p-1 hover:text-red-600'
                        onClick={remove}
                    >
                        <span className='drop-shadow-sm fa-solid fa-trash' />
                    </button>
        
                    {hasError ? (
                        <p className='text-red-500 text-sm'>Problem loading data. Please check location's name.</p>
                    ) : (
                        <>
                            {weatherForecast?.current && <CurrentWeather weather={weatherForecast.current} />}
                            <div className='h-0.5 bg-slate-200 my-3' />
                            {weatherForecast?.forecast?.forecastday && <WeatherForecast forecastList={weatherForecast.forecast.forecastday} />}
                        </>
                    )}
                </>
            )}

        </article>
    );
};

export default WeatherLocationItem;