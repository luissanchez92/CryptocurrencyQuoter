import styled from '@emotion/styled'
import { useState } from 'react'

const Label= styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select= styled.select`
    width: 100%;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    padding: 14px;
    border-radius: 5px;

`

const useSelectMoney = (label, options) => {
    const [state, setState]=useState('')
    const SelectMoney=()=>(
        <>
            <Label>{label}</Label>
            <Select value={state} onChange={event=>setState(event.target.value)}>
                <option value=''>select</option>
                {options.map(option=>(
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </Select>
        </>

    )
    return [state, SelectMoney]
}

export default useSelectMoney
