import React from 'react'
import Users from './Users'

function MessengerDashboard() {
  return (
    <div className='d-flex'>
        <div className='w-25 vh-100 bg-light border p-2 m-2 rounded'>
            <Users></Users>
        </div>
        <div className='w-75 bg-info p-2 m-2 rounded'>
            chat history
        </div>
    </div>
  )
}

export default MessengerDashboard