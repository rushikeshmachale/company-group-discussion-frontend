import React, {  useState } from 'react'
import EmployeeService from '../services/LoginService';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';




const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] =useState('');
    const[employee,setEmployee]=useState('');
    const[error,setError] =useState('');
    const[role,setRole] = useState(''); 


    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async(event)=>{
        event.preventDefault();

        try{
            const employee = await EmployeeService.login(username,password);
            if (employee) {
             setEmployee(employee);
              setRole(employee.role)
              setError('');
              handleNavigate(employee.role); 
              Cookies.set('employee',JSON.stringify(employee));

            } else {
              setError('Role not fetched correctly');
              setRole(null);
            }
            
        }catch(error){
            setError(error);
            setRole(null);
        }
    }

    console.log(role);

   const handleNavigate=(role)=>{
   if(role==='admin'){
    navigate('admin/dashboard')
   }else{
    navigate('user/dashboard')
   }

    
   }

  return (



    <div className="container-fluid">
      <div className="row justify-content-center h-100">
        <div className="col-md-6">
           <div>
              <h2>Login</h2>
              {error && <div className="alert alert-danger">{error.toString()}</div>}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                
              </form>
            </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Login