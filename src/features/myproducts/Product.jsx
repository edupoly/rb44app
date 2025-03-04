import React, { useEffect } from 'react'
import DeleteModal from './DeleteModal'


function Product({title,price,id}) {
  return (
    <div className='p-3 m-3 border'>
        <h4>{title}</h4>
        <b>{price}</b>
        <h1>{id}</h1>
        <div>
            <i className='bi bi-trash'></i>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
                Launch demo modal
            </button>
        </div>
        <DeleteModal id={id}></DeleteModal>
    </div>
  )
}

export default Product