import React from 'react'


const UpdateGroup = () => {
    return (
        <div>
        <h2>Update Group Details</h2>
    
        <form id="updateEmployeeForm">
            <label for="employeeId">Group ID:</label>
            <input type="text" id="groupId" name="groupId" required=""></input>
    
            <label for="groupName">Group Name:</label>
            <input type="text" id="groupName" name="groupName" required=""></input>
    
            
            <label for="department">Department:</label>
            <input type="text" id="department" name="department" required=""></input>
    
           
    
            <button type="button" onclick="updateEmployee()">Update Group</button>
        </form>
    
        
        </div>
    
      )
      }
    
    
    export default UpdateGroup
    
    