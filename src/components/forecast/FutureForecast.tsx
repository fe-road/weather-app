import SimpleForecast from './SimpleForecast';

import { ForecastModel } from '../../models/Forecast';

interface Props {
    forecastList: Array<ForecastModel>;
}

const FutureForecast = ({ forecastList = [] }: Props) => {
    return (
        <section className='text-sm'>
            <span className='text-slate-500 text-xs'>Following Days</span>
            <div className='grid grid-cols-3 sm:grid-cols-6'>
                {forecastList.map((item, index) => (
                    <SimpleForecast
                        key={index}
                        forecast={item}
                    />
                ))}
            </div>
        </section>
    );
};

export default FutureForecast;