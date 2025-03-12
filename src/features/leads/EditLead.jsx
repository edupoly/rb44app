import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeadDetailsByIdQuery } from '../../services/leadsApi';
import { useFormik } from 'formik'

function EditLead() {
    var {id}=useParams();
    var {isLoading,data}=useGetLeadDetailsByIdQuery(id);
    console.log(isLoading);
    var leadForm = useFormik({
        initialValues:{
            fullname:data?.fullname,
            mobile:data?.mobile,
            email:data?.email,
            course:data?.course,
            remarks:[{
                text:data?.remarks[0].text,
                timestamp:data?.remarks[0].timestamp
            }]
        },
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    useEffect(()=>{
        console.log(isLoading);
        if(data){
            leadForm.setValues(data)
        }
    },[data])
  return (
    <div>
        <h2>EditLead</h2>
        {
            isLoading && <b>Loading</b>
        }
        <form onSubmit={leadForm.handleSubmit}>
            <input type="text" {...leadForm.getFieldProps('fullname')} placeholder='FULLNAME'/>
            <br />
            <input type="text" {...leadForm.getFieldProps('mobile')} placeholder='MOBOLE'/>
            <br />
            <input type="text" {...leadForm.getFieldProps('email')} placeholder='email'/>
            <br />
            <input type="text" {...leadForm.getFieldProps('course')} placeholder='course'/>
            <br />
            <input type="text" {...leadForm.getFieldProps('remarks[0].text')} placeholder='remark'/>
            <br />
            <button type='submit'>Add Lead</button>
        </form>
        <i>{JSON.stringify(leadForm.values)}</i>
        {
            !isLoading && <i>{JSON.stringify(data)}</i>
        }
    </div>
  )
}

export default EditLead