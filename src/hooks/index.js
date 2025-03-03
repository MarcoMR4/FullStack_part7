import { useState, useEffect } from "react";
import axios from "axios";

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const reset = () => {
        setValue('')
    }

    return {
        type, 
        value, 
        onChange, 
        reset
    }
}

export const useCountry = (name) => {
    const [country, setCountry] = useState(null)
  
    useEffect(() => {
        if(!name) return 

        const fetchCountryData = async () => {
            try {
                const response = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
                setCountry(response) 
            }
            catch (err) {
              console.error('error fetching data')
              setCountry(null)
            } 
        }

        fetchCountryData()

    }, [name])
  
    return country
}