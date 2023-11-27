import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeDashboard from "./components/employee/EmployeeDashboard";
import EmployeeChat from "./components/employee/EmployeeChat";
import Admin from "./components/manager/Admin";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login/Login";


function App() {
  return (
    <BrowserRouter>
    {/**
    <Navbar />
  */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/edashboard" element={<EmployeeDashboard />} />
        <Route path="/echat" element={<EmployeeChat />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
