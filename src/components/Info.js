import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import DeleteIcon from '@mui/icons-material/Delete';
import {  useNavigate } from 'react-router-dom';
import MyGroupService from '../services/MyGroupService';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Info = () => {
  const [group, setGroup] = useState(null);
  const navigate = useNavigate();
  const employee = JSON.parse(Cookies.get('employee'));


  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedGroup = Cookies.get('group');
        
        if (selectedGroup) {
          const groupData = await JSON.parse(selectedGroup);
          setGroup(groupData);
        }
      } catch (error) {
        console.error('Error:', error);
        setGroup({});
      }
    };

    fetchData();
  }, []);

  const deleteEmployee = async (employeeId) => {
    try {
      // Make an API call to delete the employee from the group
      const response = await fetch(`http://localhost:8888/groupemployee/${group.id}/employee/${employeeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // If the deletion is successful, update the state to reflect the change
        const updatedEmployees = group.employees.filter((employee) => employee.id !== employeeId );
        setGroup({ ...group, employees: updatedEmployees });
      } else {
        console.error('Error deleting employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleBack=()=>{
    console.log(employee.role);
    if(employee.role==='admin'){
        navigate('/admin/dashboard')
    }else{
      navigate('/user/dashboard')
    }
    
  }

  const navigateToAdd=()=>{

    if(employee.role==='admin'){
      navigate(`/admin/dashboard/add/${group.id}`)
  }
  }


  const handleDeletegroup =async(id)=>{
    try {
     await MyGroupService.deleteGroupById(id);
     console.log('deleted');
     if(employee.role==='admin'){
      navigate('/admin/dashboard')
  }else{
    navigate('/user/dashboard')
  }
     
    

    } catch (error) {

      console.error("Prob in dlt grp",error);
      
    }


  }
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Group Information</h3>
      {group && (
        <div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Group Details</h5>
                  <p className="card-text">Name: {group.name}</p>
                  <p className="card-text">Type: {group.type}</p>
                </div>
              </div>
              {employee.role === 'admin' && (
              
                <button className='btn btn-danger' onClick={()=>handleDeletegroup(group.id)}>Delete</button>
        // <button className='btn btn-danger mt-4' onClick={()=>handleDeletegroup(group.id)} >Delete Group</button>
      )}
            </div>
            {/* Delete group button visible only to the admin */}
     
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Admin</h5>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.employees
                        .filter((employee) => employee.role === 'admin')
                        .map((employee, index) => (
                          <tr key={index}>
                            <td>{employee.username}</td>
                            <td>{employee.role}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Group Members</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    {employee.id ==='admin' && (<th>Action</th>)}
                    
                  </tr>
                </thead>
                <tbody>
                  {group.employees
                    .filter((employee) => employee.role === 'user')
                    .map((employee, index) => (
                      <tr key={index}>
                        <td>{employee.username}</td>
                        <td>{employee.role}</td>
                        {employee.id==='admin' && (<td>
                          <DeleteIcon style={{ fontSize: '16px', color: 'red' }
                        } onClick={() => deleteEmployee(employee.id)} />
                          
                        </td> )}
                        
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
<ArrowBackIcon
  className='mt-4 ' // Custom classes
  fontSize='large' // Font size
  style={{
    // Custom styles
    color: 'black', // Change icon color
    cursor: 'pointer', // Add pointer cursor on hover
    marginRight: '10px', // Add margin-right
  }}
  onClick={handleBack} // onClick function
/>      {employee.role==='admin' &&
      <button onClick={navigateToAdd} className='btn btn-primary mt-4 mx-3'>Add Employee</button>
    }
    </div>
  );
};

export default Info;
