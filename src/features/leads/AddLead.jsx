import { useFormik } from 'formik'
import React from 'react'
import { useAddLeadMutation } from '../../services/leadsApi';

function AddLead() {
    var [addLeadFn]=useAddLeadMutation()
    
    var leadForm = useFormik({
        initialValues:{
            fullname:"asd",
            mobile:"uytr",
            email:"gfd",
            course:"iuy",
            remarks:{
                text:"uytuy",
                timestamp:Date.now()
            }
        },
        onSubmit:(values)=>{
            // console.log(values);
            leadForm.setFormikState({...leadForm.values,course:'EDOCOIR'})
            console.log(values);
            // leadForm.setFieldValue("course",leadForm.values.course.toUpperCase(),false).then(()=>{
            //     console.log(leadForm.values);
            //     // leadForm.resetForm();
            // })
            // // leadForm.setValues({...leadForm.values,course:"REACTJS"}).then(()=>{
            // //     console.log(leadForm.values);
            // //     // leadForm.resetForm();
            // // })
            // await leadForm.setFieldValue("remarks[0]['text']","NEEEISTAMMMM",false)
            // leadForm.setValues({
            //     ...leadForm.values,remarks:{text:'NEEYABBA',timestamp:Date.now()}
            // }).then(function(a){
            //     console.log(a);
            //     console.log(leadForm.values);
            // })

            // values.remarks[0].text=document.getElementById("d1").value.toUpperCase();
            // values.remarks[0].timestamp=Date.now();
            // addLeadFn(leadForm.values).then(()=>{
            //     alert("add ipoindi")
            //     leadForm.resetForm();
            // }).catch(err=>console.log(err))
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
            <input type="text" {...leadForm.getFieldProps('remarks.text')} placeholder='remark'/>
            <br />
            <button type='submit'>Add Lead</button>
        </form>
        <i>{JSON.stringify(leadForm.values)}</i>
    </div>
  )
}

export default AddLead