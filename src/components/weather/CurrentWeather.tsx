import { CurrentWeatherModel } from '../../models/Weather';

interface Props {
    weather: CurrentWeatherModel;
}

const CurrentWeather = ({ weather }: Props) => {
    return (
        <section className='flex flex-col text-sm'>
            <span className='text-slate-500 text-xs'>Current</span>
            <div className='flex gap-2 py-2'>
                <span className='fa-solid fa-sun text-4xl' />
                <p className='mb-0 text-lg'>{weather?.temp_c}º</p>
                <div className='text-sm text-slate-500 border-l border-slate-200 pl-2'>
                    <span>Wind: {weather?.wind_kph}kph</span>
                </div>
            </div>
        </section>
    );
};

export default CurrentWeather;