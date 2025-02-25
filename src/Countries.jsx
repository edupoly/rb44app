import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCountries } from './store/action'
function Countries({isLoading,countries,loadCountries}) {

    useEffect(()=>{
        loadCountries()
    },[])
  return (
    <div>
      {
        isLoading && (<b>Loading...</b>)
      }
      {
        countries.length>0 && (
          <ul>
            {countries.map((country)=>{
              return <li>{country.name.common}</li>
            })}
          </ul>
        ) 
      }
    </div>
  )
}
function mapDispatchToProps(dispatch){
  return {
    loadCountries:()=>{dispatch(getCountries())}
  }
}
export default connect(state=>state.countriesReducer,mapDispatchToProps)(Countries)