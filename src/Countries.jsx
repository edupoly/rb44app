import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Countries() {
  var [countries,setCountries] = useState([])
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>{return res.json()})
    .then(data=>setCountries([...data]))
  },[])
  return (
    <div>
      <h3>Countries</h3>
      <div className='d-flex'>
        <div>
          <ul>
            {
              countries.map((country)=>{
                return <li><Link to={`/countries/countryDetails/${country.name.common}`}>{country.name.common}</Link></li>
              })
            }
          </ul>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Countries