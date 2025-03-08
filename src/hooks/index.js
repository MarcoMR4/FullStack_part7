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

export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])
  
    useEffect(() => {
        const fetchData = async() => {
            try {
                const result = await axios.get(baseUrl)
                setResources(result.data)
                console.log(resources)
            } 
            catch (error) {
                console.error("It's ocurred an error: ",error)
            }
        }
        fetchData()
    }, [baseUrl])
  
    const create = async (resource) => {
        try {
            const newNote = {
                content: resource.content,
                important: false
            }
            const result = await axios.post(baseUrl, resource)
            setResources(resources.concat(result.data))
        } 
        catch (error) {
            console.error('Error trying to create new note ',error)
        }
    }
  
    const service = {
      create
    }
  
    return [
      resources, service
    ]
}