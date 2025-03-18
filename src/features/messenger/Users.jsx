import React, { useEffect } from 'react'
import { useGetAllUsersQuery } from '../../services/messengerApi'
import { socket } from '../../index'
import { useLazyGetAllUsersQuery } from '../../services/messengerApi';

function Users() {
    var {isLoading,data=[]}=useGetAllUsersQuery();
    var [getAllUsersFn]=useLazyGetAllUsersQuery();

    socket.on("updateUserStatus",(details)=>{
        console.log("details",details);
        getAllUsersFn();
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