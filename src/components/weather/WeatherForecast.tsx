import SimpleForecast from './SimpleForecast';

import { ForecastModel } from '../../models/Forecast';

interface Props {
    forecastList: ForecastModel[];
}

const WeatherForecast = ({ forecastList = [] }: Props) => {
    return (
        <section className='text-sm'>
            <span className='text-slate-500 text-xs'>Overview</span>
            <div className='grid grid-cols-3 sm:grid-cols-6'>
                {forecastList.map((item) => (
                    <SimpleForecast
                        key={item.date}
                        forecast={item}
                    />
                ))}
            </div>
        </section>
    );
};

export default WeatherForecast;