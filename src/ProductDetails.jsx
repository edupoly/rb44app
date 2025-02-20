import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

function ProductDetails() {

    var p = useLocation();
    console.log("p:",p)

    var [searchParams] = useSearchParams()
    var [details,setDetails] = useState({})
    console.log(searchParams.get('id'))
    useEffect(()=>{
        var id = searchParams.get('id');
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setDetails({...data})
        })
    },[])
  return (
    <div>
        <h3>ProductDetails</h3>
        <div className="d-flex">
            <div>
                <img src={details.image} alt="" />
            </div>
            <div>
                <h3>{details.title}</h3>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails