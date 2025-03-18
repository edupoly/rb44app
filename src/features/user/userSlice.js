import { createSlice } from '@reduxjs/toolkit'
import { socket } from '../../index'
import { useLazyGetAllUsersQuery } from '../../services/messengerApi';
import { useNavigate } from 'react-router-dom';

const initialState = {
  username:"",
  role:""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser:(state,{payload:{data}})=>{
        console.log(data);
        state.username=data.username
        state.role=data.role
        window.localStorage.setItem("token",data.token)
    },
    logout:(state)=>{
        state.username="";
        state.role="";
        window.localStorage.removeItem("token")

    }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser,logout } = userSlice.actions
var userReducer = userSlice.reducer
export default userReducer;