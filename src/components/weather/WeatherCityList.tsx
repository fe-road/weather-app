import { useEffect, useState } from 'react';
import WeatherCityItem from './WeatherCityItem';
import SearchAddCity from '../form/SearchAddCity';

import { CityModel } from '../../models/City';
import { MAX_ITEMS } from '../../constants/weather-constants';
import { fetchCityList, saveCityList } from '../../services/storageService';

const WeatherCityList = () => {
    const [list, setList] = useState<Array<CityModel>>(fetchCityList());

    const addCity = (city: CityModel): void => {
        if (list.length < MAX_ITEMS) {
            setList((currentValue) => [...currentValue, city]);
        }
    };

    const deleteCity = (index: number): void => {
        if (index >= 0 && index < list.length) {
            setList((currentValue) => currentValue.filter((_, i) => index !== i));
        }
    };

    useEffect(() => {
        saveCityList(list);
    }, [list])

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