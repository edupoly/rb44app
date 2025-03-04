import React from 'react'
import { useFormik } from 'formik'
import { useAddProductMutation, useLazyGetAllMyProductsQuery } from '../../services/myproducts'
import { useLazyGetProductDetailsByIdQuery } from '../../services/products'
function AddProduct() {
    var [addProductFn]=useAddProductMutation()
    var [getAllProdFn]=useLazyGetAllMyProductsQuery();
    var productForm = useFormik({
        initialValues:{
            title:"",
            price:"",
            model:""
        },
        onSubmit:(values)=>{
            addProductFn(values)
            .then(()=>{
                getAllProdFn()
            }).catch(()=>{})
        }
    })
  return (
    <div>
        <h3>AddProduct</h3>
        <form onSubmit={productForm.handleSubmit}>
            <input type="text" placeholder='title' {...productForm.getFieldProps('title')}/>
            <br />
            <input type="text" placeholder='price' {...productForm.getFieldProps('price')}/>
            <br />
            <input type="text" placeholder='model' {...productForm.getFieldProps('model')}/>
            <br />
            <button>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct