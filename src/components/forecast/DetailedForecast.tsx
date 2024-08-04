import { DetailedForecastModel } from '../../models/Forecast';

interface Props {
    forecast: DetailedForecastModel;
}

const DetailedForecast = ({ forecast }: Props) => {
    return (
        <section className='flex flex-col text-sm'>
            <span className='text-slate-500 text-xs'>Today</span>
            <div className='flex gap-2 py-2'>
                <span className='fa-solid fa-sun text-4xl' />
                <p className='mb-0 text-lg'>{forecast.minTemperature}º - {forecast.maxTemperature}º</p>
                <div className='text-sm text-slate-500 border-l border-slate-200 pl-2'>
                    <span>Wind: {forecast.windSpeed}m</span>
                </div>
            </div>
        </section>
    );
};

export default DetailedForecast;