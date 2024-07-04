import React, { useEffect, useState } from 'react'
import MyGroupService from '../services/MyGroupService';
import { useNavigate } from 'react-router-dom';

const DeleteGroup = (id) => {
    const navigate = useNavigate();

    
        MyGroupService.deleteGroupById(id).then((response) => {
         // fetchAllGroups();   
          navigate("/admin/dashboard");
        }).catch((error) => {
          alert("Error Ocurred in delete group:" + error);
        });
      
  return (
    <div>
        
    </div>
  )
}

export default DeleteGroup