import React, { useEffect } from 'react'
import { useGetAllUsersQuery } from '../../services/messengerApi'
import { socket } from '../../index'
import { useLazyGetAllUsersQuery } from '../../services/messengerApi';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from '../user/userSlice';

function Users() {
    var {isLoading,data=[]}=useGetAllUsersQuery();
    var [getAllUsersFn]=useLazyGetAllUsersQuery();
    var users = useSelector(state=>state.user)
    console.log("users::",users);
    var dispatch = useDispatch()
    socket.on("updateUserStatus",(details)=>{
        console.log("details::",details);
        getAllUsersFn().then((res)=>{dispatch(updateUsers(res.data))})
    })

  return (
    <div>
        <ul className='list-unstyled'>
            {
               !isLoading && data?.map((user)=>{
                    return <li className='p-2'>
                            {user.status==='online' && <i class="bi bi-check-circle-fill text-success"></i>}
                            {user.status==='offline' && <i class="bi bi-x-circle-fill"></i>}
                            <b className='ms-2'>{user.username}</b>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Users