import { Link, useNavigate, useParams } from "react-router-dom";
import MessageService from "../services/MessageService";
import React, { useEffect, useState } from "react";
import MyGroupService from "../services/MyGroupService";

const UpdateGroup = () => {
  const navigate = useNavigate();
  const [groupData,setGroupData] = useState([])

  const {id} = useParams()
  const [group, setGroup] = useState({
    groupId: "",
    name: "",
    department: "",
  });

  const { groupId, name, department } = group;

  useEffect(()=>{loadGroup()},[])
  const loadGroup = async () => {
    const res = await MyGroupService.getGroupById(id);
    setGroup(res)
    console.log(res)
  };

  const handleChange = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await MyGroupService.updateGroup(id,group).then(() =>
      navigate(`/admin/dashboard`)
    );
    console.log(response);
  };
  return (
    <div className="container">
      <form action="" className="form-control my-5">
        <h2>Update Group Details</h2>
        <div class="container my-5">
          <form id="updateEmployeeForm">
            <div class="form-group">
              <label for="employeeId">Group ID:</label>
              <input
                type="text"
                onChange={handleChange}
                class="form-control"
                id="groupId"
                value={id}
                name="groupId"
                required=""
              ></input>
            </div>

            <div class="form-group">
              <label for="groupName">Group Name:</label>
              <input
                type="text"
                onChange={handleChange}
                class="form-control"
                id="groupName"
                value={name}
                name="name"
                required=""
              ></input>
            </div>

            
            <div>
            <label for="type">Group Type:</label>
            <select className=" form-control" name="type"  value={department} onChange={handleChange} id="type">
            <option value="#" disabled>Select type</option>
            <option value="Technical">Technical</option>
            <option value="Functional">Functional</option>
            </select>
            </div>

            <div className="text-center">
              <button
                type="button"
                class="btn btn-info "
                onClick={handleSubmit}
              >
                Update
              </button>

              <Link
              type="button"
              class="btn btn-info m-2"
              to='/admin/dashboard'
            >
              Cancel
            </Link>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
};
export default UpdateGroup;
