import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails() {
    var {country} = useParams();
    var [details,setDetails] = useState({})
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res=>res.json())
        .then(data=>{
            setDetails({...data[0]})
        })
    },[country])
  return (
    <div>
        <h3>{country} CountryDetails</h3>
        <div className="d-flex">
            <div>
                <img src={details?.flags?.png} alt="" />
            </div>
            <div>
                <h3>Coutnry Name:{details?.name?.common}</h3>
                <h4>Population:{details?.population}</h4>
            </div>
        </div>
    </div>
  )
}

export default CountryDetails