import React, { useEffect, useState } from 'react';
import GroupEmployeeService from '../services/GroupEmployeeService';

const Info = () => {

  const[employees,setEmployees] = useState([]);
 

  useEffect(()=>{
    getEmployeesByGroupId(1);
  },[])



  

  const getEmployeesByGroupId= async(group_id)=>{
    try {

      const employeesData = await GroupEmployeeService.getAllEmployeesByGroupId(group_id);
      console.log("Employees in group",employeesData);
      setEmployees(employeesData)
      

      
    } catch (error) {
      console.log("Error in getting employees:" , error);
      return [];
    }

  }

    
    
  return (
    <div className="container">
      <div className="group-members">
        <h3>Group Members</h3>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              ID: {employee.id}, Username: {employee.username}, Role: {employee.role}
            </li>
          ))}
        </ul>
      </div>
      <button className='btn btn-danger'>Delete Group</button>
    </div>
  );
};

export default Info;
