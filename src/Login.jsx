import { useFormik } from 'formik'
import React from 'react'

function Login() {
    var loginForm = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:(values)=>{
            fetch("http://localhost:4000/login",{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(values)
            })
        }
    })
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginForm.handleSubmit}>
            <input type="text" {...loginForm.getFieldProps('username')}/>
            <br />
            <input type="text" {...loginForm.getFieldProps('password')}/>
            <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login