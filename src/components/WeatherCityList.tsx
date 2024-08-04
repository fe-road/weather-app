import { useState } from 'react';
import WeatherCityItem from './WeatherCityItem';
import SearchAddCity from './SearchAddCity';

import { City } from '../models/City';

const MAX_ITEMS = 5;
const CITY_LIST_STORAGE_KEY = 'cityList';

const WeatherCityList = () => {
    const [list, setList] = useState<Array<City>>(JSON.parse(localStorage.getItem(CITY_LIST_STORAGE_KEY) ?? '[]') as Array<City>);

    const addCity = (city: City): void => {
        if (list.length < MAX_ITEMS) {
            setList((currentValue) => {
                const newItems = [...currentValue, city];
                localStorage.setItem(CITY_LIST_STORAGE_KEY, JSON.stringify(newItems));
                return newItems;
            });
        }
    };

    const deleteCity = (index: number): void => {
        if (index >= 0 && index < list.length) {
            setList((currentValue) => {
                const newItems = currentValue.filter((item, i) => index !== i);
                localStorage.setItem(CITY_LIST_STORAGE_KEY, JSON.stringify(newItems));
                return newItems;
            });
        }
    };

    return (
        <section className='flex flex-col gap-y-1 mt-2'>
            <SearchAddCity
                disabled={list.length === MAX_ITEMS}
                addCity={addCity}
            />

            {list.map((item, index) => (
                <WeatherCityItem
                    key={`${item.name}_${index}`}
                    item={item}
                    remove={() => deleteCity(index)}
                />
            ))}
        </section>
    );
};

export default WeatherCityList;