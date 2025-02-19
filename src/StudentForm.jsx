import React, { useEffect } from 'react'
import { ErrorMessage, Field, Form,Formik } from 'formik'
import * as Yup from 'yup'
function StudentForm() {
    var iv = {firstname:'praveen',lastname:'gubbala'};
  return (
    <div>
        <Formik
            initialValues={{...iv}}
            validationSchema={Yup.object({
                firstname:Yup.string().required("Please fill Firstname")
            })}
            onSubmit={(values)=>{console.log(values)}}
        >
            {
                ({handleSubmit,handleChange,errors,resetForm,setValues})=>{
                    return (
                        <Form>
                            <Field name="firstname"/>
                            <ErrorMessage name="firstname" component="b"></ErrorMessage>
                            <br />
                            <Field name="lastname"/>
                            <br />
                            <button type="submit">Save</button>
                            <button type="button" onClick={resetForm}>Reset</button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default StudentForm