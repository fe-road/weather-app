import { useState } from 'react';

import { City } from '../models/City';

interface Props {
    disabled: boolean;
    addCity: (city: City) => void;
}

const SearchAddCity = ({ disabled, addCity }: Props) => {
    const [search, setSearch] = useState('');

    const add = (): void => {
        addCity({ name: search });
        setSearch('');
    };

    return (
        <div className='flex gap-x-2'>
            <input
                type='text'
                value={search}
                placeholder='Enter your city...'
                className='w-full border bg-slate-50 px-2'
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className='transition min-w-48 py-2 px-3 rounded-md bg-sky-400 drop-shadow-sm enabled:hover:bg-sky-300 enabled:hover:drop-shadow-md disabled:opacity-50 disabled:bg-sky-100'
                disabled={disabled || search.length < 3}
                onClick={add}
            >
                <span className='mr-1 fa-solid fa-plus' />
                Add City
            </button>
        </div>
    );
};

export default SearchAddCity;