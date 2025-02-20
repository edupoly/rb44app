import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    var [products,setProduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct([...data]))
    },[])
  return (
    <div>
        <h2>Products</h2>
        <ul>
            {
                products.map((product)=>{
                    return <li>
                            <Link to={`/productDetails?id=${product.id}`} state={product}>{product.title}</Link>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Products