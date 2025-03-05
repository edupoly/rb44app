import React, { useEffect } from 'react'


function Product({title,price,id,setdelProdId}) {
  return (
    <div className='p-3 m-3 border'>
        <h4>{title}</h4>
        <b>{price}</b>
        <h1>{id}</h1>
        <div>
            <i className='bi bi-trash'></i>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setdelProdId(id)}}>
                Delete
            </button>
        </div>
        <div>
    </div>
    </div>
  )
}

export default Product