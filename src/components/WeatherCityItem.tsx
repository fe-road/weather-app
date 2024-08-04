import { City } from '../models/City';

interface Props {
    item: City;
    remove: () => void;
}

const WeatherCityItem = ({ item, remove }: Props) => {

    return (
        <article className='flex border-2 rounded-md px-4 py-2'>
            {item.name}

            <button
                className='transition text-sm w-7 h-7 ml-2 p-1 rounded-sm drop-shadow-sm border border-red-500 hover:text-red-600 hover:bg-red-50 hover:border-red-600 hover:drop-shadow-md'
                onClick={remove}
            >
                <span className='fa-solid fa-trash' />
            </button>
        </article>
    );
};

export default WeatherCityItem;