import React from 'react'

const CreateGroup = () => {
    return (
        <div><h1>Create Group and add Employees</h1>
        <div class="container mt-5">
            <form id="employeeForm">
                <div class="form-group">
                    <label for="groupName">Group Name:</label>
                    <input type="text" class="form-control" id="groupName" name="groupName" required ></input>
                </div>
        
                <div class="form-group">
                    <label for="employeeName">Employee Name:</label>
                    <input type="text" class="form-control" id="employeeName" name="employeeName[]" required ></input>
                </div>
        
                <div class="form-group">
                    <label for="department">Department:</label>
                    <input type="text" class="form-control" id="department" name="department[]" required ></input>
                </div>
    
                <div class="form-group">
                    <label for="department">Employee ID:</label>
                    <input type="number" class="form-control" id="emoid" name="department[]" required ></input>
                </div>
        
                
    
                <div  class="form-group">
                    <label for="c-form-grp">
                        <span class="label-text">Group Type:</span> 
                       
                    </label>
                    <select name="group" class="c-form-grp form-control " id="c-form-grp">
                        <option class="bg-info" value="Your group...">Select Group Type...</option>
                        <option class="bg-info" value="Web design"> Technical Group </option>
                        <option class="bg-info" value="Web design"> Functional Group </option>
                        
                    </select>
                    </div>
        
               
               
        
                <button type="button" class="btn btn-info" >Add Employee</button>
                <button type="button" class="btn btn-info" >Delete Employee</button>
                <button type="button" class="btn btn-info" >Update Employee</button>
            </form>
        </div>
    </div>
      )
    }
    
    export default CreateGroup