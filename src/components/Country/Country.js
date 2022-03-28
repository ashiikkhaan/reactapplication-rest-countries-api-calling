import React from 'react';
import "./Country.css"

const Country = (props) => {
    console.log(props.country)
    const { name, capital, population, flags } = props.country;
    return (
        <div className='country'>
            <h2>Country: {name}</h2>
            <img src={flags.png} alt="" />
            <h2>Capital: {capital}</h2>
            <h2>Population: {population}</h2>
        </div>
    );
};

export default Country;