import React from 'react';

const CountryDetail = ({country, neightbouringCountries}) => {

    const languages = country.languages.map((language) => {
        return language.name
    }).join(', ')

    const neighbourCountriesNames = neightbouringCountries.map((country) => {
        return country.name
    }).join(', ')

    const neighbourPolulation = neightbouringCountries.reduce((runningTotal, country) => {
        return runningTotal + country.population
    }, 0)

    return (
        <div className="country-detail">
            <h2>{country.name}</h2>
            <p><b>Population:</b> {country.population}</p>
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Languages:</b> {languages}</p>
            {neightbouringCountries.length > 0 ? <p><b>Neigbour Countries:</b> {neighbourCountriesNames}</p> : null}
            {neighbourPolulation > 0 ? <p><b>Neighbour Population:</b> {neighbourPolulation}</p> : null}
            <img src={country.flag} width="200" alt="flag"/>
        </div>
    )
}
export default CountryDetail;