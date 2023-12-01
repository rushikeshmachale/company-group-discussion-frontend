import {useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import MyGroupService from "../services/MyGroupService";

const CreateGroup = () => {

    const navigate=useNavigate()
    const [group,setGroup] = useState({
        id:'',
        name:'',
        type:''
    })
    const {id,name,type} = group

    const handleChange=(e)=>{
        setGroup({...group,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()

        const res = await MyGroupService.createGroup(group).then(()=>navigate('/admin/dashboard'))
    }
    
  return (
    <div className="container">
      <form action="" className="form-control my-5">
        <h5 className=" text-center">Create Group</h5>
        <div class="container my-5">
          <form id="employeeForm">
            <div class="form-group">
              <label for="groupName">Group Name:</label>
              <input
                type="text"
                class="form-control"
                onChange={handleChange}
                id="name" value={name}
                name="name"
                required
              ></input>
            </div>

        
            <div class="form-group">
              <label for="type">Group Type:</label>
              <select name="type" id="type" className="form-control" value={type}
              onChange={handleChange}>
              <option value="Technical">Technical</option>
              <option value="Functional">Functional</option>
              </select>
            </div>

            <div class="form-group">
              <label for="department">Group ID:</label>
              <input
                type="number"
                onChange={handleChange}
                class="form-control"
                id="id" value={id}
                name="id"
                required
              ></input>
            </div>


            <div className="text-center">
            <button type="button" class="btn btn-info my-2" onClick={handleSubmit}>
            Create
            </button>
            </div>
            
          </form>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
