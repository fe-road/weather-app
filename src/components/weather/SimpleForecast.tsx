import { ForecastModel } from '../../models/Forecast';
import { getFormattedDate, getFormattedTemperature } from '../../services/formatService';

interface Props {
    forecast: ForecastModel;
}

const SimpleForecast = ({ forecast }: Props) => {
    return (
        <article className='flex flex-col px-2 py-3 text-center items-center'>
            <img src={forecast?.day.condition.icon} alt='weather icon' className='w-8 h-8' />
            <p className='mb-0'>{getFormattedTemperature(forecast.day.mintemp_c)} - {getFormattedTemperature(forecast.day.maxtemp_c)}</p>
            <span className='text-slate-500 text-xs'>{getFormattedDate(new Date(forecast.date))}</span>
        </article>
    );
};

export default SimpleForecast;