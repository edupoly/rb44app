import React, { useState } from 'react'
import { useDeleteProductMutation, useGetAllMyProductsQuery, useLazyGetAllMyProductsQuery } from '../../services/myproducts'
import AddProduct from './AddProduct'
import { useLazyGetProductDetailsByIdQuery } from '../../services/products'
import Product from './Product'
import DeleteModal from './DeleteModal'


function MyProducts() {

    var {isLoading,data:myproducts}=useGetAllMyProductsQuery()
    var [getAllProductsLazyFn]=useLazyGetAllMyProductsQuery()
    var [deleteProdFn] = useDeleteProductMutation()
    var [delProdId,setdelProdId] = useState(null)
    function deleteProduct(id){
        deleteProdFn(id).then(()=>{
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
                    return <Product {...product} setdelProdId={setdelProdId}></Product>
                })
            }
        </div>
        <DeleteModal id={delProdId} deleteProduct={deleteProduct}></DeleteModal>

    </div>
  )
}

export default MyProducts