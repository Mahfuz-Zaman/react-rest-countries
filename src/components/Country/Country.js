import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { name, capital, population, flag } = props.country
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h1>Name:{name}</h1>
            <h2>Capital:{capital}</h2>
            <h3>Total Population:{population}</h3>

        </div>
    );
};

export default Country;