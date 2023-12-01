import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserDashBoard = () => {
    const navigate = useNavigate()
  
  const handleLogout=()=>{
    
    navigate('/');
  }


  return (
   
    <div>
    <div className="container-fluid h-100">
      <div className="row h-100">

        <div className="col-12 top-div d-flex align-items-center justify-content-between px-3">
           <div className="w-25">
               <span>Hello user!</span>
           </div>
           <div className="w-75 text-left d-flex align-items-center justify-content-between">
               <span>Group Name!!</span>
           <div>
               <button className="btn btn-info m-2">Info</button>
               <button className="btn btn-danger" onClick={handleLogout()} >Logout</button>
                        
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
                               <tr>
                                   <td>Group 2</td>
                               </tr>
                               <tr>
                                   <td>Group 3</td>
                               </tr>
                               {/* <!-- Add more rows for groups here --> */}
                           </tbody>
                       </table>
                   </div>
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

export default UserDashBoard