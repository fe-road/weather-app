import { ForecastModel } from '../../models/Forecast';

interface Props {
    forecast: ForecastModel;
}

const SimpleForecast = ({ forecast }: Props) => {
    let currentDay: string | number = forecast.date.getDate();
    if (currentDay < 10) {
        currentDay = `0${currentDay}`;
    }
    let currentMonth: string | number = forecast.date.getMonth() + 1;
    if (currentMonth < 10) {
        currentMonth = `0${currentMonth}`;
    }

    return (
        <article className='flex flex-col px-2 py-3 text-center'>
            <span className='fa-solid fa-sun text-lg mb-2' />
            <p className='mb-0'>{forecast.minTemperature}º - {forecast.maxTemperature}º</p>
            <span className='text-slate-500 text-xs'>{currentDay}/{currentMonth}</span>
        </article>
    );
};

export default SimpleForecast;