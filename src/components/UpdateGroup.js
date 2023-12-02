import React from 'react'


const UpdateGroup = () => {
    return (
        <div>
<<<<<<< HEAD
        <h2>Update Employee Details</h2>
    
        <form id="updateEmployeeForm">
            <label for="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" required=""></input>
    
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required=""></input>
    
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required=""></input>
    
            <label for="department">Department:</label>
            <input type="text" id="department" name="department" required=""></input>
    
            <label for="position">Position:</label>
            <input type="text" id="position" name="position" required=""></input>
    
            <button type="button" onclick="updateEmployee()">Update Employee</button>
=======
        <h2>Update Group Details</h2>
    
        <form id="updateEmployeeForm">
            <label for="employeeId">Group ID:</label>
            <input type="text" id="groupId" name="groupId" required=""></input>
    
            <label for="groupName">Group Name:</label>
            <input type="text" id="groupName" name="groupName" required=""></input>
    
            
            <label for="department">Department:</label>
            <input type="text" id="department" name="department" required=""></input>
    
           
    
            <button type="button" onclick="updateEmployee()">Update Group</button>
>>>>>>> 552b662d83a35a9dc01c393e6027f01d1b30a544
        </form>
    
        
        </div>
    
      )
      }
    
    
    export default UpdateGroup
    
    