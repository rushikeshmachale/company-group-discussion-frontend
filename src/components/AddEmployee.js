import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupEmployeeService from "../services/GroupEmployeeService";
import LoginService from "../services/LoginService";
const AddEmployee = () => {
  const { id } = useParams();

  const [member, setMember] = useState([]);

  const [empl, setEmpl] = useState({
    group_id: id,
    employee_id: "",
  });
  const { group_id, employee_id } = empl;
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await LoginService.getAllEmployees()
      .then((res) => setMember(res))
      .catch((e) => console.log(e));
  };

  // const selectedUser = (e) => {
  //   setEmployee_id(e.id);
  //   console.log(employee_id);
  // };
  const handleChange = (e) => {
    setEmpl({ ...empl, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8888/groupemployee/addemployee", empl)
      .then(() => console.log("employee added to group"))
      .catch(() => console.log("error"));
  };

  return (
    <div className="container">
      <form className="form-control my-5">
      <h6 className=" text-center my-4">Add Employees to group</h6>
      <div>

      <input
        type="text"
        className="form-control my-2"
        name="group_id"
        value={group_id}
        onChange={handleChange}
        placeholder="Enter gropu id here"
      />
      <input
        type="text"
        className="form-control"
        name="employee_id"
        value={employee_id}
        onChange={handleChange}
        placeholder="Enter employee id here"
      />
    </div>

    <button className="btn btn-info my-2" onClick={handleSubmit}>
      Submit
    </button>

        <h6 className=" text-center my-4">Members</h6>

        <table className="table ">
        <thead>
        <tr>
        <th>Employee id</th>
        <th>Employee name</th>
        </tr>
        </thead>
          {member.map((x, index) => (
            <tbody key={index}>
              <tr>
                <td>
                {x.id}
                </td>
                <td>
                {x.username}
                </td>
              </tr>
            </tbody>
          ))}
        </table>

       
      </form>
    </div>
  );
};

export default AddEmployee;
