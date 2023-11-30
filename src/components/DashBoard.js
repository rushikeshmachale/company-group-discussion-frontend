import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const DashBoard = () => {

  const[groups,setGroups] = useState([]);

  const employee = useSelector((state)=> state.employeeReducer.employee)
  const navigate = useNavigate()

 

  const handleCreate = ( )=>{
    navigate('create');
  }
  const handleUpdate = ( )=>{
    navigate('update');


  }
  const handleInfo = ( )=>{
    navigate('info');
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
                <span>Hello {employee.username}!</span>
            </div>
            <div className="w-75 text-left d-flex align-items-center justify-content-between">
                <span>Group Name!!</span>
            <div>
                <button className="btn btn-info" onClick={handleInfo}>Info</button>
               <button className="btn btn-success m-2" onClick={handleUpdate} >Update</button>
               <button className="btn btn-danger " onClick={handleLogout} >Logout</button>
                         
            </div>
            </div>
        </div>

       
               

         <div className="col-md-3 sidebar">
                <div className="px-3 py-4 d-flex flex-column justify-content-between sidebartable" >
                    <div>
                        <input type="text" className="form-control mb-3" placeholder="Search..."/>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Groups</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Group 1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   <button className="btn btn-primary btn-block mt-3" onClick={handleCreate} >Create Group</button>
                </div>
            </div>

            <div className="col-md-9 chat-window">
                <div className="chat-messages border-bottom mb-3">
                    {/* <!-- Sample Messages (replace with actual chat content) --> */}
                    <div className="message">Sample Message 1</div>
                    <div className="message">Sample Message 2</div>
                    <div className="message">Sample Message 3</div>
                    {/* <!-- Add more messages here --> */}
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
}

export default DashBoard