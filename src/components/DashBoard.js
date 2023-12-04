import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {  useNavigate } from "react-router-dom";
// import GroupEmployeeService from "../services/GroupEmployeeService";
import MessageService from "../services/MessageService";
import ClearIcon from '@mui/icons-material/Clear';
import MyGroupService from "../services/MyGroupService";
import EditIcon from '@mui/icons-material/Edit';



const DashBoard = () => {

    const[employee,setEmployee] = useState('');
    // const[groups,setGroups] = useState([]);
    const[messages,setMessages] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const[groupName,setGroupName]=useState('');
    const [allGroups, setAllGroups] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
    
        const getEmployee = async () => {
          const employeeData = Cookies.get('employee');
          if (employeeData) {
            const parsedEmployee = await JSON.parse(employeeData);
            setEmployee(parsedEmployee);
            console.log(parsedEmployee);
          }
        };
    
        // const fetchGroups = async (id) => {
        //   try {
        //     const response = await GroupEmployeeService.getGroupsByEmployeeId(id);
        //     setGroups(response);
        //     Cookies.set('groups', response);
        //   } catch (error) {
        //     console.error('Error fetching groups:', error);
        //   }
        // };


        const fetchAllGroups = async () => {
          try {
            const fetchedAllGroups = await MyGroupService.getAllGroups();
            setAllGroups(fetchedAllGroups); // Update all groups state
            if (fetchedAllGroups.length > 0) {
              // Automatically select the first group from the fetched groups
              const firstGroup = fetchedAllGroups[0];
              setSelectedGroup(firstGroup);
              fetchMessages(firstGroup.id);
              setGroupName(firstGroup.name);
            }
          } catch (error) {
            console.error('Error fetching all groups:', error);
          }
        };


    
        getEmployee();
        // if (employee.id) {
        //   fetchGroups(employee.id);
        // }
        fetchAllGroups();
      }, [employee.id]);



  const fetchMessages = async (id) => {
    try {
      const response = await MessageService.getMessagesByGroupId(id);
      setMessages(response); 
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    fetchMessages(group.id);
    setGroupName(group.name);
    
  };

  const handleInfoClick =async (group) => {
    setSelectedGroup(group);
    Cookies.set('group',JSON.stringify(group));
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

  const handleSend=async()=>{

    try {
      console.log("slected group",selectedGroup);
      const messageData = {
        text:messageInput,
        group:selectedGroup,
        employee:employee,
        localDateTime:new Date()
      };

      const response = await MessageService.createMessage(messageData);
      console.log(response);
      setMessages([...messages,response]);
      setMessageInput('')

      
    } catch (error) {

      console.error("Error Sending Message");
      
    }


  }

  const handleDeleteMessage = async (id) => {
    try {
      const response = await MessageService.deleteMessage(id);
      if (response) {
        // Filter out the deleted message from the messages state
        const updatedMessages = messages.filter((message) => message.id !== id);
        setMessages(updatedMessages);
      }
    } catch (error) {
      console.error("Error while deleting message", error);
    }
  };


  return (
  <div>
     <div className="container-fluid h-100">
       <div className="row h-100">

         <div className="col-12 top-div d-flex align-items-center justify-content-between px-3 bg-gradient">
            <div className="w-25">
                <span className="fw-bold">Hello  {employee.username}!</span>
            </div>
            <div className="w-75 text-left d-flex align-items-center justify-content-between">
                <span className="fw-bold">{groupName}</span>
            <div>
                
            <button className="btn btn-info" onClick={()=>handleInfoClick(selectedGroup)}>Info</button>
               <button className="btn btn-success m-2" onClick={handleUpdate} >Update</button>
               <button className="btn btn-danger " onClick={handleLogout} >Logout</button>
                         
            </div>
            </div>
        </div>

       
               

        <div className="col-md-3 sidebar">
  <div className="px-3 py-4 d-flex flex-column justify-content-between sidebartable">
    <div>
      <input type="text" className="form-control mb-3" placeholder="Search..." />
      <table className="table table-hover">
  <thead>
    <tr>
      <th>Sr.No</th>
      <th>Name</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    {allGroups.map((group, index) => (
      <tr
        key={group.id}
        onClick={() => handleGroupClick(group)}
        className={selectedGroup && selectedGroup.id === group.id ? 'table-success' : ''}
      >
        <td>{index + 1}</td>
        <td>{group.name}</td>
        <td>{group.type}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>


                   <button className="btn btn-primary btn-block mt-3" onClick={handleCreate} >Create Group</button>
                </div>
            </div>

            <div className="col-md-9 chat-window">
  <div className="chat-messages">
    {messages ? (
      messages.map((message, index) => (
        <div key={index} className={`message ${message.employee.id === employee.id ? 'sent' : 'received'}`}>
          <div className={`message-content ${message.employee.id === employee.id ? 'sent-message' : 'received-message'} p-3 rounded mb-2`}>
            <div className="message-info d-flex  mb-1">
              <span className="message-sender fw-bold me-2">{message.employee.id === employee.id ? 'You' : message.employee.username}</span>
              <span className="message-timestamp text-muted me-5 ms-4">{new Date(message.localDateTime).toLocaleString()}</span>
               <span>  <ClearIcon fontSize="small" className="me-2" onClick={()=>handleDeleteMessage(message.id)}></ClearIcon> </span>
            </div>
            <div className="message-text">
              {message.text}
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="alert alert-info">No messages available</div>
    )}
  </div>




                <div className="d-flex">
                     <input
            type="text"
            className="form-control m-1"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button className="btn btn-primary m-1" onClick={handleSend}>
            Send
          </button>
                </div>
            </div>

        </div>

     
  </div>
  
  </div>
  )
};


export default DashBoard;