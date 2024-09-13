import { CurrentWeatherModel } from '../../models/Weather';
import { getFormattedTemperature } from '../../services/formatService';

interface Props {
    weather: CurrentWeatherModel;
}

const CurrentWeather = ({ weather }: Props) => {
    return (
        <section className='flex flex-col text-sm'>
            <span className='text-slate-500 text-xs'>Current</span>
            <div className='flex gap-2 py-2'>
                <div className='text-center px-4'>
                    <img src={weather?.condition.icon} alt='weather icon' />
                    <p className='mb-0 text-lg'>{getFormattedTemperature(weather?.temp_c)}</p>
                </div>
                <div className='text-xs text-slate-500 border-l border-slate-200 pl-2'>
                    <p className='mb-1'>{weather?.condition.text}</p>
                    <p className='mb-0'>Feels Like: {getFormattedTemperature(weather?.feelslike_c)}</p>
                    <p className='mb-0'>Wind: {weather?.wind_kph}kph</p>
                    <p className='mb-0'>Precipitation: {weather?.precip_mm}mm</p>
                    <p className='mb-0'>Humidity: {weather?.humidity}%</p>
                </div>
            </div>
        </section>
    );
};

export default CurrentWeather;