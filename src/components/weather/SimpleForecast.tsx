import { ForecastModel } from '../../models/Forecast';
// import { getFormattedDate } from '../../services/dateService';

interface Props {
    forecast: ForecastModel;
}

const SimpleForecast = ({ forecast }: Props) => {
    // const formattedDate = getFormattedDate(forecast.date);

    return (
        <article className='flex flex-col px-2 py-3 text-center'>
            <span className='fa-solid fa-sun text-lg mb-2' />
            <p className='mb-0'>{forecast.day.mintemp_c}º - {forecast.day.maxtemp_c}º</p>
            <span className='text-slate-500 text-xs'>{forecast.date}</span>
        </article>
    );
};

export default SimpleForecast;