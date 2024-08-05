import { useState } from 'react';
import WeatherCityItem from './WeatherCityItem';
import SearchAddCity from '../form/SearchAddCity';

import { CityModel } from '../../models/City';
import { fetchCityList, saveCityList } from '../../services/storageService';

const MAX_ITEMS = 5;

const WeatherCityList = () => {
    const [list, setList] = useState<Array<CityModel>>(fetchCityList());

    const addCity = (city: CityModel): void => {
        if (list.length < MAX_ITEMS) {
            setList((currentValue) => {
                const newItems = [...currentValue, city];
                saveCityList(newItems);
                return newItems;
            });
        }
    };

    const deleteCity = (index: number): void => {
        if (index >= 0 && index < list.length) {
            setList((currentValue) => {
                const newItems = currentValue.filter((item, i) => index !== i);
                saveCityList(newItems);
                return newItems;
            });
        }
    };

    return (
        <section className='flex flex-col gap-y-4 mt-2 text-gray-800'>
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