import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {  useNavigate } from "react-router-dom";
import GroupEmployeeService from "../services/GroupEmployeeService";
import MessageService from "../services/MessageService";




const DashBoard = () => {

    const[employee,setEmployee] = useState('');
    const[groups,setGroups] = useState([]);
    const[messages,setMessages] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null); 
    const navigate = useNavigate()
  
    useEffect(() => {
    
        const getEmployee = async () => {
          const employeeData = Cookies.get('employee');
          if (employeeData) {
            const parsedEmployee = await JSON.parse(employeeData);
            setEmployee(parsedEmployee);
            console.log(parsedEmployee);
          }
        };
    
        const fetchGroups = async (id) => {
          try {
            const response = await GroupEmployeeService.getGroupsByEmployeeId(id);
            setGroups(response);
            Cookies.set('groups', response);
          } catch (error) {
            console.error('Error fetching groups:', error);
          }
        };
    
        getEmployee();
        if (employee.id) {
          fetchGroups(employee.id);
        }
      }, [employee.id]);



  const fetchMessages = async (id) => {
    try {
      const response = await MessageService.getMessagesByGroupId(id);
      setMessages(response); // Assuming response is an object with a 'data' property containing messages
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleGroupClick = (groupId) => {
    fetchMessages(groupId);
  };

  const handleInfoClick =async (group) => {
    setSelectedGroup(group);
    Cookies.set('group',JSON.stringify(group));
    console.log(group);
    navigate('info')
  };

  const handleCreate = ( )=>{
    navigate('create');
  }

  const handleUpdate = ( )=>{
    navigate('update');
  }
 
  const handleLogout=()=>{
    navigate('/')
  }


  return (
  <div>
     <div className="container-fluid h-100">
       <div className="row h-100">

         <div className="col-12 top-div d-flex align-items-center justify-content-between px-3">
            <div className="w-25">
                <span>Hello  {employee.username}!</span>
            </div>
            <div className="w-75 text-left d-flex align-items-center justify-content-between">
                <span>Group Name!!</span>
            <div>
                
               <button className="btn btn-success m-2" onClick={handleUpdate} >Update</button>
               <button className="btn btn-danger " onClick={handleLogout} >Logout</button>
                         
            </div>
            </div>
        </div>

       
               

        <div className="col-md-3 sidebar">
  <div className="px-3 py-4 d-flex flex-column justify-content-between sidebartable">
    <div>
      <input type="text" className="form-control mb-3" placeholder="Search..." />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id}>
              <td>{group.id}</td>
              <td>{group.type}</td>
              <td>{group.name}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleGroupClick(group.id)}>Go</button>
              </td>
              <td>
              <button className="btn btn-info" onClick={()=>handleInfoClick(group)}>Info</button>              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>


                   <button className="btn btn-primary btn-block mt-3" onClick={handleCreate} >Create Group</button>
                </div>
            </div>

            <div className="col-md-9 chat-window">
  <div className="chat-messages border-bottom mb-3">
    {messages ? (
      messages.map((message, index) => (
        <div key={index} className={`message ${message.sender === employee.id ? 'sent' : 'received'}`}>
          <div className={`message-content p-2 mb-2 rounded ${message.sender === employee.id ? 'bg-primary text-white' : 'bg-light'}`}>
            {message.text}
          </div>
          <div className={`message-timestamp text-muted small text-end ${message.sender === employee.id ? 'text-white' : ''}`}>
            {new Date(message.localDateTime).toLocaleString()}
          </div>
        </div>
      ))
    ) : (
      <div>No messages available</div>
    )}
  </div>



                <div className="d-flex">
                    <input type="text" className="form-control m-1" placeholder="Type a message..."/>
                    <button className="btn btn-primary m-1 ">Send</button>
                </div>
            </div>

        </div>

     
  </div>
  
  </div>
  )
};


export default DashBoard;