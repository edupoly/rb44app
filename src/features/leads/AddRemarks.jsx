import React, { useState } from 'react'
import { useAddLeadRemarkMutation, useGetLeadDetailsByIdQuery, useLazyGetLeadDetailsByIdQuery } from '../../services/leadsApi'
import { useParams } from 'react-router-dom';

function AddRemarks() {
    var [newremark,setNewRemark] = useState("")
    var {id} = useParams();
    var {isLoading,data}=useGetLeadDetailsByIdQuery(id);
    var [addLeadRemarkFn]=useAddLeadRemarkMutation()
    var [getLeadDetailsFn] = useLazyGetLeadDetailsByIdQuery()
    function addNewRemark(){
        addLeadRemarkFn({id,remarks:[...data.remarks,{text:newremark,timestamp:Date.now()}]})
        .then(()=>{getLeadDetailsFn(id)})
    }
  return (
    <div>
        <h3>AddRemarks</h3>
        <div className='d-flex flex-wrap vh-100'>
            <div className='w-50 bg-success'>
                ALL Remaks
                {
                    !isLoading && (<b>{JSON.stringify(data.remarks)}</b>)
                }
            </div>
            <div className='w-50 bg-danger'>
                <div className='w-100 p-3 h-50 bg-warning'>
                    <h3>Profile</h3>
                    <h4>{data?.fullname.toUpperCase()}</h4>
                </div>
                <div>
                    <textarea className='w-100' rows="10" onChange={(e)=>{setNewRemark(e.target.value)}}/>
                    <button onClick={()=>{addNewRemark()}}>Add Remark</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRemarks