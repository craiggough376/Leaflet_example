import './App.css';


import React, {useState, useEffect} from 'react'
import CountrySelect from './components/CountrySelect'
import CountryDetail from './components/CountryDetail'
import MapBox from './components/MapBox'



const App = () =>{


  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)


  const fetchCountries = function(){
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }

  useEffect(fetchCountries, [])

  const handleCountrySelect = function(country){
      setSelectedCountry(country)
  }

  const totalPopulation = countries.reduce((runningTotal, country) => {
      return runningTotal + country.population
  }, 0)

  const getNeibouringCountries = () => {
      const neighbourCountries = selectedCountry.borders.map((border) => {
          return countries.find((country) => {
              return country.alpha3Code === border
          })
      })
      return neighbourCountries
  }
      
  return (
      <div className="App">
          <h1>Countries!</h1>
          <h2>World Population: {totalPopulation}</h2>
          <CountrySelect countries={countries} onCountrySelect={handleCountrySelect}/>
          <div className="country-info">
          {selectedCountry ? <CountryDetail country={selectedCountry} neightbouringCountries={getNeibouringCountries()}/> : null}
          {selectedCountry ? <MapBox country={selectedCountry}/> : null}
          </div>
          
      </div>
  )

}
export default App;
