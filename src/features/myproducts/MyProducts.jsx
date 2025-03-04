import React from 'react'
import { useDeleteProductMutation, useGetAllMyProductsQuery, useLazyGetAllMyProductsQuery } from '../../services/myproducts'
import AddProduct from './AddProduct'
import { useLazyGetProductDetailsByIdQuery } from '../../services/products'
import Product from './Product'


function MyProducts() {

    var {isLoading,data:myproducts}=useGetAllMyProductsQuery()
    var [getAllProductsLazyFn]=useLazyGetAllMyProductsQuery()
    var [deleteProdFn] = useDeleteProductMutation()
    function deleteProduct(){
        deleteProdFn().then(()=>{
            getAllProductsLazyFn();
        }).catch()
    }
  return (
    <div>
        <h3>MyProducts</h3>
        <div className='border m-3 p-2'>
            <AddProduct></AddProduct>
        </div>
        <div className="d-flex">
            {
                !isLoading && myproducts.map((product)=>{
                    return <Product {...product}></Product>
                })
            }
        </div>
    </div>
  )
}

export default MyProducts