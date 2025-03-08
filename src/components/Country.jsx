

const Country = ({ country }) => {
  
    if (country == null) {
      return (
        <div>
          not found...
        </div>
      )
    }
  
    return (
      <div>
        <h3>{country.data.name.common} </h3>
        <div>capital {country.data.capital[0]} </div>
        <div>population {country.data.population}</div> 
        <div style={{marginBottom: '10px'}}>languages: {JSON.stringify(country.data.languages, null, 2)}</div>
        <img src={country.data.flags.png} height='100' alt={`flag of ${country.data.name.common}`}/>  
      </div>
    )
}

export default Country