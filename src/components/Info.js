import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';

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
            </div>
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {group.employees
                    .filter((employee) => employee.role === 'user')
                    .map((employee, index) => (
                      <tr key={index}>
                        <td>{employee.username}</td>
                        <td>{employee.role}</td>
                        <td>
                          <button onClick={() => deleteEmployee(employee.id)}>
                            <DeleteIcon style={{ fontSize: '16px', color: 'red' }} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <button className='btn btn-primary mt-4' onClick={handleBack}>Back</button>
      {employee.role==='admin' &&
      <button onClick={navigateToAdd} className='btn btn-primary mt-4 mx-3'>Add Employee</button>
    }
    </div>
  );
};

export default Info;
