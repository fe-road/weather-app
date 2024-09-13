import { useEffect, useState } from 'react';
import WeatherLocationItem from './WeatherLocationItem';
import SearchAddLocation from '../form/SearchAddLocation';

import { LocationModel } from '../../models/Location';
import { MAX_ITEMS } from '../../constants/weather-constants';
import { fetchLocationList, saveLocationList } from '../../services/storageService';

const WeatherLocationList = () => {
    const [list, setList] = useState<Array<LocationModel>>(fetchLocationList());

    const addLocation = (location: LocationModel): void => {
        if (list.length < MAX_ITEMS) {
            setList((currentValue) => [...currentValue, location]);
        }
    };

    const deleteLocation = (index: number): void => {
        if (index >= 0 && index < list.length) {
            setList((currentValue) => currentValue.filter((_, i) => index !== i));
        }
    };

    useEffect(() => {
        saveLocationList(list);
    }, [list]);

    return (
        <section className='flex flex-col gap-y-4 mt-2 text-gray-800'>
            <SearchAddLocation
                disabled={list.length === MAX_ITEMS}
                addLocation={addLocation}
            />

            {list.map((item, index) => (
                <WeatherLocationItem
                    key={`${item.name}_${index}`}
                    item={item}
                    remove={() => deleteLocation(index)}
                />
            ))}
        </section>
    );
};

export default WeatherLocationList;