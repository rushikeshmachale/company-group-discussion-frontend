
import './App.css';
import CreateGroup from './components/CreateGroup';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UpdateGroup from './components/UpdateGroup';
import UserDashBoard from './components/UserDashBoard';
import Info from './components/Info';
import UserContextProvider from './context/UserContextProvider';


function App() {
  
  
  return (
    <UserContextProvider>
    <BrowserRouter>
    
    <Routes>
    
    <Route  path='/' element={<Login  />}/>
        <Route  path='admin/dashboard' element={<DashBoard  />}/>
        <Route  path='user/dashboard' element={<UserDashBoard  />}/>
        <Route  path='admin/dashboard/create' element={<CreateGroup />}/>
        <Route  path='admin/dashboard/update' element={<UpdateGroup  />}/>
        <Route  path='admin/dashboard/info' element={<Info  />}/>
        <Route  path='user/dashboard/info' element={<Info  />}/>
        

      
        </Routes>
   
    </BrowserRouter>
    </UserContextProvider>
   
  );
}

export default App;
