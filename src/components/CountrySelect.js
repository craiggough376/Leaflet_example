import React from 'react'

const CountrySelect = ({countries, onCountrySelect}) => {

    const countryNodes = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    })

    const handleCountrySelect = (event) => {
        const country = countries[event.target.value]
        onCountrySelect(country)
    }

    return(
        <div className="country-select">
            <select defaultValue="default" onChange={handleCountrySelect}>
                <option value="default" disabled>Select Countries</option>
                {countryNodes}
            </select>
        </div>
    )
}

export default CountrySelect;