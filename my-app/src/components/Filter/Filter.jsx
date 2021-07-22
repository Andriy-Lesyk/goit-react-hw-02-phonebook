import React from 'react'
import {Input, Div} from "./Filter.styled"
import { v4 as filterId } from 'uuid'

function Filter({filter, onChange}) {
    return (
        <Div>
            <label htmlFor={filterId(filter)}>Find contacts by name</label>
            <Input 
                value={filter}
                onChange={onChange}
                type="text"
                name="filter"
                id={filterId(filter)}
            />
        </Div>
    )
}

export default Filter
