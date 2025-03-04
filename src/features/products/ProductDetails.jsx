import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductDetailsByIdQuery, useLazyGetProductDetailsByIdQuery } from '../../services/products';

function ProductDetails() {
    var {id}=useParams();
    console.log("Product Details Comp",id)
    var {isLoading,data}=useGetProductDetailsByIdQuery(id);
    var [detailsFn]=useLazyGetProductDetailsByIdQuery();
    var navigate = useNavigate()
    console.log(isLoading)
    console.log("data",data)
    function nextProd(){
        navigate(`/products/${+id+1}`)
        // detailsFn(+id+1)
    }
  return (
    <div>
        <h3>ProductDetails</h3>
        <div className='d-flex'>
            <div>
                <img src={data?.image} alt="" className='w-50'/>
            </div>
            <div>
                <h2>{data?.title}</h2>
                <h2>Rs.{data?.price}</h2>
            </div>
        </div>
        <button className='btn btn-success'>Previous</button>
        <button className='btn btn-danger' onClick={()=>{nextProd()}}>Next</button>
    </div>
  )
}

export default ProductDetails