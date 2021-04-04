import React from 'react';

function FilterButton({name, setFilter, pressed}) {
    return (
        <div>
            <button type="button" aria-pressed={pressed} onClick={() => setFilter(name)}>{name}</button>
        </div>
    );
}

export default FilterButton;
