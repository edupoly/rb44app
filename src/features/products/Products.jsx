import React from 'react'
import { useGetAllProductsQuery } from '../../services/products'
import { Link } from 'react-router-dom'

function Products() {
    var {isLoading,data}=useGetAllProductsQuery()
  return (
    <div>
        <h3>Products</h3>
        {
            isLoading && <b>Loading...</b>
        }
        {
            !isLoading && (
                <ul>
                    {
                        data.map((product)=>{
                            return <li><Link to={`/products/${product.id}`}>{product.title}</Link></li>
                        })
                    }

                </ul>
            )
        }
    </div>
  )
}

export default Products