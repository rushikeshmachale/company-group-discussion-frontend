import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeDashboard from "./components/employee/EmployeeDashboard";
import EmployeeChat from "./components/employee/EmployeeChat";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    {/**
    <Navbar />
  */}
      <Routes>
        <Route path="/" element={<EmployeeDashboard />} />
        <Route path="/edashboard" element={<EmployeeDashboard />} />
        <Route path="/echat" element={<EmployeeChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
