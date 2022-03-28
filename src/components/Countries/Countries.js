import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Coutries.css"


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Hello From Countries(React Application)</h2>
            {/* {
                countries.map(country => console.log(country))
            } */}
            <div className='countries-container'>
                {
                    countries.map(country => <Country country={country} key={country.numericCode}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;