import { CityModel } from '../models/Location';

const CITY_LIST_STORAGE_KEY = 'cityList';

export const saveCityList = (list: Array<CityModel>): void => {
    localStorage.setItem(CITY_LIST_STORAGE_KEY, JSON.stringify(list));
};

export const fetchCityList = (): Array<CityModel> => {
    return JSON.parse(localStorage.getItem(CITY_LIST_STORAGE_KEY) ?? '[]') as Array<CityModel>;
};