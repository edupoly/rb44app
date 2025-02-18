import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

function StudentForm() {
    var studentForm = useFormik({
        initialValues:{
            firstname:'',
            lastname:"",
            age:"",
            gender:"",
            techs:null
        },
        validationSchema:Yup.object({
            firstname:Yup.string()
            .required("arey chusko.. idi mustuuu")
            .max(7,"pedda perlu vaddu")
            .test('cv1','this username is already there',async function(a,b){
                var {createError,path}= this;

                var res = await fetch(`https://restcountries.com/v3.1/name/${a}`)
                var data = await res.json();
                return !Array.isArray(data)

                // var p = new Promise((resolve,reject)=>{
                //     fetch(`https://restcountries.com/v3.1/name/${a}`)
                //     .then(res=>res.json())
                //     .then(data=>{
                //         if(Array.isArray(data)){
                //             reject(createError({path,message:'try another'}))
                //         }
                //         else{
                //             resolve(true)
                //         }
                //     })
                // })
                // return p;
            })

        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return (
        <div className='border border-2 border-danger m-2 p-2'>
            {JSON.stringify(studentForm.errors)}
            {JSON.stringify(studentForm.touched)}
            <h2>StudentForm</h2>
            <form onSubmit={studentForm.handleSubmit}>
                <input type="text" name="firstname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
                <b>{studentForm.touched.firstname && studentForm.errors.firstname}</b>
                <br />
                <input type="text" name="lastname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
                <br />
                <input {...studentForm.getFieldProps('age')}/>
                <br />
                <b>Gender::</b>
                <br />
                <input type="radio" name="gender" value="male" onChange={studentForm.handleChange}/>: Male
                <input type="radio" name="gender" value="female" onChange={studentForm.handleChange}/>: Female
                <input type="radio" name="gender" value="others" onChange={studentForm.handleChange}/>: Others
                <br />
                <b>Technologies:</b>
                <br />
                <input type="checkbox" name="techs" value="nodejs" onChange={studentForm.handleChange}/>:NodeJS
                <input type="checkbox" name="techs" value="expressjs" onChange={studentForm.handleChange}/>:ExpressJS
                <input type="checkbox" name="techs" value="ang" onChange={studentForm.handleChange}/>:Angular
                <input type="checkbox" name="techs" value="rjs" onChange={studentForm.handleChange}/>:ReactJS
                <br />
                <button type="submit">Save Student</button>
            </form>
        </div>
    )
}

export default StudentForm