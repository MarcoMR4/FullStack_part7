import React, { useState, useEffect } from 'react'
import { useField, useCountry } from '../hooks'
import axios from 'axios'
import Country from './Country'

const Countries = () => {
    const nameInputFull = useField('text')
    const {reset, ...nameInput} = nameInputFull

    const [name, setName] = useState('')
    const country = useCountry(name)

    const fetch = (e) => {
        e.preventDefault()
        setName(nameInput.value)
    }

    return (
        <div>
            <form onSubmit={fetch}>
                <input {...nameInput} />
                <button type="submit">find</button>
            </form>
            
            <Country country={country} />
        </div>
    )
}

export default Countries

