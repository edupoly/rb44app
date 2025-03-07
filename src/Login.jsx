import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from './services/userApi';
import { useDispatch } from 'react-redux';
import { updateUser } from './features/user/userSlice';

function Login() {
    var navigate = useNavigate();
    var [loginUserFn]=useLoginUserMutation()
    var dispatch = useDispatch()
    var loginForm = useFormik({
                        initialValues:{
                            username:'',
                            password:''
                        },
                        onSubmit:(values)=>{
                            loginUserFn(values).then((res)=>{
                                dispatch(updateUser(res))
                            })
                        }
                    })
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginForm.handleSubmit}>
            <input type="text"  {...loginForm.getFieldProps('username')}/>
            <br />
            <input type="text"  {...loginForm.getFieldProps('password')}/>
            <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login