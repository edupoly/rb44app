import { useFormik } from 'formik'
import React from 'react'
import { useAddLeadMutation, useLazyGetAllLeadsQuery } from '../../services/leadsApi';

function AddLead() {
    var [addLeadFn]=useAddLeadMutation()
    var [getLeadsLazyFn] = useLazyGetAllLeadsQuery()
    var leadForm = useFormik({
        initialValues:{
            fullname:"mani",
            mobile:"1231323",
            email:"askjdh@gmail.com",
            course:"reactjs",
            remarks:[{
                text:"uytuy",
                timestamp:Date.now()
            }]
        },
        onSubmit:(values)=>{
            leadForm.setFieldValue("course",leadForm.values.course.toUpperCase())
            leadForm.values.course=leadForm.values.course.toUpperCase();
            addLeadFn(leadForm.values).then(()=>{
                console.log('hihi');
                getLeadsLazyFn();
            })

        }
    })
  return (
    <div>
        <h2>AddLead</h2>
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
    </div>
  )
}

export default AddLead