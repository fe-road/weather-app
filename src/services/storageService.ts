import { LocationModel } from '../models/Location';

const LOCATION_LIST_STORAGE_KEY = 'locationList';

export const saveLocationList = (list: Array<LocationModel>): void => {
    localStorage.setItem(LOCATION_LIST_STORAGE_KEY, JSON.stringify(list));
};

export const fetchLocationList = (): Array<LocationModel> => {
    return JSON.parse(localStorage.getItem(LOCATION_LIST_STORAGE_KEY) ?? '[]') as Array<LocationModel>;
};