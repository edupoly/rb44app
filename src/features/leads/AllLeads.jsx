import React from 'react'
import { useDeleteLeadMutation, useGetAllLeadsQuery, useLazyGetAllLeadsQuery } from '../../services/leadsApi'
import { Link } from 'react-router-dom'

function AllLeads() {
    var {isLoading,data}=useGetAllLeadsQuery()
    var [deleteLeadFn] = useDeleteLeadMutation()
    var [getAllLeadsFn] = useLazyGetAllLeadsQuery()
    function deleteLead(lead){
        deleteLeadFn(lead).then(()=>{
            getAllLeadsFn()
        })
    }
  return (
    <div>
        <h2>AllLeads</h2>
        {
            isLoading && <b>Loading...</b>
        }
        {
            !isLoading && (
                <ul>
                    {
                        data?.map((lead)=>{
                            return <li>
                                    {lead.fullname}
                                    <Link to={`/addRemarks/${lead.id}`}  className='btn btn-success m-2 p-2'>Add Remark</Link>
                                    <button onClick={()=>{deleteLead(lead)}} className='btn btn-danger m-2 p-2'>Delete</button>
                                    <Link className='btn btn-warning' to={`/editLead/${lead.id}`}>Edit</Link>
                                </li>
                        })
                    }
                </ul>
            )
        }
    </div>
  )
}

export default AllLeads