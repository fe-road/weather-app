import { CityModel } from '../../models/City';
import { generateDetailedForecast, generateFutureForecast } from '../../services/mockService';
import DetailedForecast from '../forecast/DetailedForecast';
import FutureForecast from '../forecast/FutureForecast';

interface Props {
    item: CityModel;
    remove: () => void;
}

const WeatherCityItem = ({ item, remove }: Props) => {
    const todaysForecast = generateDetailedForecast();
    const futureForecast = generateFutureForecast();

    return (
        <article className='relative flex flex-col drop-shadow-md rounded-md px-4 py-2 bg-white'>
            <p className='text-lg'>{item.name}</p>

            <button
                className='transition absolute top-1 end-1 text-sm w-7 h-7 ml-2 p-1 hover:text-red-600'
                onClick={remove}
            >
                <span className='drop-shadow-sm fa-solid fa-trash' />
            </button>

            <DetailedForecast forecast={todaysForecast} />
            <div className='h-0.5 bg-slate-200 my-3' />
            <FutureForecast forecastList={futureForecast} />
        </article>
    );
};

export default WeatherCityItem;