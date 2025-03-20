import React, { useEffect } from 'react'
import { useGetAllUsersQuery } from '../../services/messengerApi'
import { socket } from '../../index'
import { useLazyGetAllUsersQuery } from '../../services/messengerApi';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from '../user/userSlice';

function Users() {
    var {isLoading,data=[]}=useGetAllUsersQuery();
    var [getAllUsersFn]=useLazyGetAllUsersQuery();
    var {username,users} = useSelector(state=>state.user)

    console.log("users::",users);
    var dispatch = useDispatch()
    socket.on("updateUserStatus",(details)=>{
        console.log("details::",details);
        getAllUsersFn().then((res)=>{dispatch(updateUsers(res.data))})
    })
    function sendHI(rec){
        socket.emit("personalMessage",{msg:"Ela unnav",receiver:rec,username:username})
    }
  return (
    <div>
        <ul className='list-unstyled'>
            {
               users?.map((user)=>{
                    return <li className='p-2'>
                            {user.status==='online' && <i class="bi bi-check-circle-fill text-success"></i>}
                            {user.status==='offline' && <i class="bi bi-x-circle-fill"></i>}
                            <b className='ms-2' onClick={()=>{sendHI(user.socketid)}}>{user.username}</b>
                            <br />
                            {user.socketid}
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Users