import { useState } from 'react';

import { LocationModel } from '../../models/Location';

interface Props {
    disabled: boolean;
    addLocation: (location: LocationModel) => void;
}

const SearchAddLocation = ({ disabled, addLocation }: Props) => {
    const [search, setSearch] = useState('');

    const add = (): void => {
        addLocation({ name: search });
        setSearch('');
    };

    return (
        <div className='flex gap-x-2'>
            <input
                type='text'
                value={search}
                placeholder='Enter your location...'
                className='w-full border drop-shadow-sm rounded-md bg-slate-50 px-2'
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className='transition min-w-48 py-2 px-3 rounded-md bg-sky-400 drop-shadow-sm enabled:hover:bg-sky-300 enabled:hover:drop-shadow-md disabled:opacity-50 disabled:bg-sky-100'
                disabled={disabled || search.length < 3}
                onClick={add}
            >
                <span className='mr-1 fa-solid fa-plus' />
                Add Location
            </button>
        </div>
    );
};

export default SearchAddLocation;