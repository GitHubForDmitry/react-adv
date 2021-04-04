import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

function FilterButton({name, setFilter, pressed}) {
    return (
        <ButtonGroup>
            <Button className="mr-2 mb-5" variant="primary" type="button" aria-pressed={pressed} onClick={() => setFilter(name)}>{name}</Button>{' '}
        </ButtonGroup>
    );
}

export default FilterButton;
