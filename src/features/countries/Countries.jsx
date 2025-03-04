import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countries'

function Countries() {
   var {isLoading,data} = useGetAllCountriesQuery();
   console.log("isLoading:",isLoading)
   console.log("data:",data)
  return (
    <div>
        <h2>Countries</h2>
        {
            isLoading && <b>Loading...</b>
        }
        {
            !isLoading && (
                data.map((country)=>{
                    return <li>{country.name.common}</li>
                })
            )
        }
    </div>
  )
}

export default Countries