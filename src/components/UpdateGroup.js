
import {useNavigate} from 'react-router-dom'
import MessageService from '../services/MessageService';
import React, { useState } from "react";

const UpdateGroup = () =>{

  const navigate=useNavigate()
      const [group,setGroup] = useState({
        groupId: '',
        name: '',
        department: ''
      })
     
      const {groupId,name,department} = group


      const handleChange=(e)=>{
          setGroup({...group,[e.target.name]:e.target.value})
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await MessageService.updateGroup(group).then(()=>navigate(`/admin/dashboard/add/${groupId}`))
        console.log(response);

      }
    return (

    <div className='container'>
       <form action="" className="form-control my-5">
       <h2>Update Group Details</h2>
       <div class="container my-5">
       
    
        <form id="updateEmployeeForm">
          <div class="form-group">
            <label for="employeeId">Group ID:</label>
            <input 
            type="text"
            onChange={handleChange} 
            class="form-control"
            id="groupId" value={groupId}
            name="groupId" 
            required="" >

            </input>
          </div>
           
          <div class="form-group">
            <label for="groupName">Group Name:</label>
            <input 
            type="text" 
            onChange={handleChange} 
            class="form-control"
            id="groupName" value={name}
            name="groupName"
             required="">

             </input>
          </div>
    
          <div class="form-group">
            <label for="department">Department:</label>
            <input 
            type="text" 
            onChange={handleChange}
            class="form-control"
            id="department" value={department}
            name="department" 
            required="">

            </input>
          </div>
           
    
          <div className="text-center">
            <button type="button" class="btn btn-info " onClick={handleSubmit}>
            Update Group
            </button>
          </div>
          

       </form>
       </div>
     </form>
    </div>
    
    );
      };
   export default UpdateGroup;
    
